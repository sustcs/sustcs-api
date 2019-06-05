'use strict';


const Service = require('egg').Service;
const table = 'introduction';
class SubjectService extends Service {
  // find ======================================================================================================>
  async find(id) {
    const subject = await this.app.mysql.get(table, { id });
    return subject;
  }
  // create ======================================================================================================>
  async create() {
    const result = await this.app.mysql.insert(table, { title: 'Hello World' });
    return result;
  }
  async all() {
    const result = await this.app.mysql.select(table);
    return result;
  }
  async update() {
    const row = {
      id: 1,
      // any other fields u want to update
      udpateAt: this.app.mysql.literals.now, // `now()` on db server
    };
    const result = await this.app.mysql.update(table, row);
    if (result.affectedRows === 1) {
      return {
        code: 1,
        msg: 'ok',
      };
    }
  }
  async delete(id) {
    const result = await this.app.mysql.delete(table, {
      id,
    });
    return result;
  }
}

module.exports = SubjectService;
