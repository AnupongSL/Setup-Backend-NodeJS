const db = require("../database/models");

exports.repoEmployeeAll = async () => await db.Employees.findAll();

exports.repoByUsernameEmployee =  async (username) =>
await db.Employees.findAll({
  where: {
    username: username
  }
});
exports.repoAddEmployee = async (employee1) => await db.Employees.create(employee1);

exports.repoLoginEmployee = async () => await db.Employees.findAll();

