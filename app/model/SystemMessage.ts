module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Message = app.model.define('system_message', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING, // 消息名
    content: STRING, // 消息内容
    sender: { type: INTEGER, defaultValue: 1 }, // 发送者，1 系统，2 其他
    userId: INTEGER, // 接收消息的人的id，0：全部成员，2:其他用户id
    status: { type: INTEGER, defaultValue: 1 }, // 1 未读 2 已读
    type: { type: INTEGER, defaultValue: 1 }, // 消息类型，1：通知
  }, { freezeTableName: true });

  return Message;
};
