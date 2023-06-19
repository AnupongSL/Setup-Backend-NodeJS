const db = require("../database/models");
const { Op } = require("sequelize");

exports.repoWorkHistoryAll = async (startRec, stopRec) =>
  await db.Work_histories.findAll({
    attributes: ["name_employee", "check_in", "check_out", "date"],
    offset: startRec,
    limit: stopRec,
  });

exports.repoWorkHistoryByDate = async (timeIn, timeOut, startRec, stopRec) =>
  await db.Work_histories.findAll({
    where: {
      date: {
        [Op.gt]: timeIn,
        [Op.lt]: timeOut,
      },
    },
    attributes: ["name_employee", "check_in", "check_out", "date"],
    offset: startRec,
    limit: stopRec,
  });

exports.repoWorkHistoryByName = async (name, startRec, stopRec) =>
  await db.Work_histories.findAll({
    where: {
      name_employee: {
        [Op.like]: `${name}%`,
      },
    },
    attributes: ["name_employee", "check_in", "check_out", "date"],
    offset: startRec,
    limit: stopRec,
  });

exports.repoWorkHistoryByUsername = async (usernameEm, startRec, stopRec) =>
  await db.Work_histories.findAll({
    where: {
      username_employee: usernameEm,
    },
    attributes: ["name_employee", "check_in", "check_out", "date"],
    loffset: startRec,
    limit: stopRec,
  });

exports.repoWorkHistoryByUsernameAndDate = async (
  usernameEm,
  timeIn,
  timeOut,
  startRec,
  stopRec
) =>
  await db.Work_histories.findAll({
    where: {
      username_employee: usernameEm,
      date: {
        [Op.gt]: timeIn,
        [Op.lt]: timeOut,
      },
      attributes: ["name_employee", "check_in", "check_out", "date"],
      offset: startRec,
      limit: stopRec,
    },
  });

exports.repoAddCheckIn = async (check_in) =>
  await db.Work_histories.create(check_in);

exports.repoAddCheckOut = async (timeIn, timeOut, check_out) =>
  await db.Work_histories.update(check_out, {
    where: {
      date: {
        [Op.gt]: timeIn,
        [Op.lt]: timeOut,
      },
    },
  });
