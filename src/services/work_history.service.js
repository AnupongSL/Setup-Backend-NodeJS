const workHistoryRepository = require("../repositories/work_history.repository");
const moment = require("moment");
exports.servWorkHistoryAll = async (page) => {
  let startRec = 0;
  let stopRec = 20;
  if (page != 1) {
    startRec = (page - 1) * 20 + 1;
    stopRec = startRec + 20 - 1;
  }
  return await workHistoryRepository.repoWorkHistoryAll(startRec, stopRec);
};
exports.servWorkHistoryByDate = async (date, page) => {
  let startRec = 0;
  let stopRec = 20;
  if (page != 1) {
    startRec = (page - 1) * 20 + 1;
    stopRec = startRec + 20 - 1;
  }
  const time1 = moment(date);
  const time2 = moment(date);
  const timeIn = time1.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const timeOut = time2.set({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 0,
  });
  return await workHistoryRepository.repoWorkHistoryByDate(
    timeIn,
    timeOut,
    startRec,
    stopRec
  );
};

exports.servWorkHistoryByName = async (name, page) => {
  let startRec = 0;
  let stopRec = 20;
  if (page != 1) {
    startRec = (page - 1) * 20 + 1;
    stopRec = startRec + 20 - 1;
  }
  await workHistoryRepository.repoWorkHistoryByName(name, startRec, stopRec);
};

exports.servWorkHistoryByUsername = async (usernameEm, page) => {
  let startRec = 0;
  let stopRec = 20;
  if (page != 1) {
    startRec = (page - 1) * 20 + 1;
    stopRec = startRec + 20 - 1;
  }
  await workHistoryRepository.repoWorkHistoryByUsername(
    usernameEm,
    startRec,
    stopRec
  );
};

exports.servWorkHistoryByUsernameAndDate = async (usernameEm, date, page) => {
  let startRec = 0;
  let stopRec = 20;
  if (page != 1) {
    startRec = (page - 1) * 20 + 1;
    stopRec = startRec + 20 - 1;
  }
  const time1 = moment(date);
  const time2 = moment(date);
  const timeIn = time1.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const timeOut = time2.set({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 0,
  });
  return await workHistoryRepository.repoWorkHistoryByUsernameAndDate(
    usernameEm,
    timeIn,
    timeOut,
    startRec,
    stopRec
  );
};

exports.servAddCheckIn = async (usernameEm, nameEm) => {
  const newDate = new Date();
  const createat = newDate.setHours(newDate.getHours());
  const format1 = "HH:mm:ss";
  const dateTime1 = moment(createat).format(format1);
  await workHistoryRepository.repoAddCheckIn({
    check_in: dateTime1,
    name_employee: nameEm,
    username_employee: usernameEm,
    date: createat,
  });
};

exports.servAddCheckOut = async () => {
  const newDate = new Date();
  const createat = newDate.setHours(newDate.getHours());
  const format1 = "HH:mm:ss";
  const dateTime1 = moment(createat).format(format1);
  const time1 = moment(createat);
  const time2 = moment(createat);
  const timeIn = time1.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const timeOut = time2.set({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 0,
  });
  await workHistoryRepository.repoAddCheckOut(timeIn, timeOut, {
    check_out: dateTime1,
  });
};
