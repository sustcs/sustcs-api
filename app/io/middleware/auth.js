'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/qrcode');
    const query = socket.handshake.query;

    const { room, type, expire } = query;

    logger.debug('#user_info', id, room, type);

    const tick = (id, msg) => {
      logger.debug('#tick', id, msg);

      // 踢出用户前发送消息
      socket.emit('deny', msg);

      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
      nsp.adapter.remoteDisconnect(id, true, err => {
        logger.error(err);
      });
    };

    let check = true;
    let conCount = await app.redis.scard(room);
    if (conCount === 2) {
      tick(id, {
        type: 'deleted',
        message: 'deleted, someone is connecting.',
      });
      logger.warn('someone is connecting');
      check = false;
      return;
    } 
    let hasRoom = await app.redis.exists(room);
    if(type === 'weapp' && !hasRoom) {
      tick(id, {
        type: 'invalid',
        message: 'invalid QRcode.',
      });
      check = false;
      return;
    } 
    if(check) {
      logger.info('#join', room);
      socket.join(room,() => {
        nsp.to(room).emit('join', type);
        if(conCount === 0) {
          app.redis.sadd(room, type);
          app.redis.expire(room, expire);
        } else {
          app.redis.sadd(room, type);
        }
        
      });
      await next();
    }
    socket.leave(room);
    app.redis.del(room);
  };
};
