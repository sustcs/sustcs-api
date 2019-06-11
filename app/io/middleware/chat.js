'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/team');
    const query = socket.handshake.query;

    const { room, username } = query;

    logger.debug('#user_info', id, room, username);

    const tick = (id, msg) => {
      logger.debug('#tick', id, msg);

      // 踢出用户前发送消息
      socket.emit('deny', msg);

      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
      nsp.adapter.remoteDisconnect(id, true, err => {
        logger.error(err);
      });
    };
    // 检查房间是否存在(team.id)，检查该用户名是否在该队伍中
    // check()
    // ...

    const check = true;
    if (!check) {
      tick(id, {
        type: 'deleted',
        message: 'deleted, someone is connecting.',
      });
      logger.warn('someone is connecting');
      return;
    }
    const conCount = await app.redis.scard(room);
    if (check) {
      logger.info('#join', room);

      socket.join(room, () => {
        nsp.to(room).emit('join', {
          username,
          numUsers: conCount + 1,
        });
        app.redis.sadd(room, username);
      });
      await next();
    }
    socket.leave(room, () => {
      nsp.to(room).emit('leave', {
        username,
        numUsers: conCount - 1,
      });
      app.redis.srem(room, username);
    });
  };
};
