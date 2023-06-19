const db = require("../database/models");

exports.repoByUsernameHr = async (username) =>
  await db.HRs.findAll({
    where: {
      username: username,
    },
  });

exports.repoAddHr = async (hr1) => await db.HRs.create(hr1);