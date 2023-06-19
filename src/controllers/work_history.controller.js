const workHistoryService = require("../services/work_history.service");

exports.getWorkHistoryAll = async (req, res) => {
  if (req.role == "hr") {
    res.json(await workHistoryService.servWorkHistoryAll(req.body.page));
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.getWorkHistoryByDate = async (req, res) => {
  if (req.role == "hr") {
    const result = await workHistoryService.servWorkHistoryByDate(
      req.body.date, req.body.page
    );
    if (result != "") {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "ไม่พบประวัติการเข้าทำงาน", Status: false });
    }
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.getWorkHistoryByName = async (req, res) => {
  if (req.role == "hr") {
    const result = await workHistoryService.servWorkHistoryByName(
      req.body.name, req.body.page
    );
    if (result != "") {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "ไม่พบประวัติการเข้าทำงาน", Status: false });
    }
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.getWorkHistoryByUsername = async (req, res) => {
  if (req.role == "employee") {
    const result = await workHistoryService.servWorkHistoryByUsername(
      req.usernameEm, req.body.page
    );
    if (result != "") {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "ไม่พบประวัติการเข้าทำงาน", Status: false });
    }
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.getWorkHistoryByUsernameAndDate = async (req, res) => {
  if (req.role == "employee") {
    const result = await workHistoryService.servWorkHistoryByUsernameAndDate(
      req.usernameEm,
      req.body.date,
      req.body.page
    );
    if (result != "") {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "ไม่พบประวัติการเข้าทำงาน", Status: false });
    }
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.addCheckIn = async (req, res) => {
  if (req.role == "employee") {
    await workHistoryService.servAddCheckIn(req.usernameEm, req.nameEm);
    res.status(200).json({
      msg: "บันทึกเวลาการเข้าทำงานเรียบร้อยแล้ว",
    });
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};

exports.addCheckOut = async (req, res) => {
  if (req.role == "employee") {
    await workHistoryService.servAddCheckOut();
    res.status(200).json({
      msg: "บันทึกเวลาการออกทำงานเรียบร้อยแล้ว",
    });
  } else {
    res.status(200).json({ msg: "คุณไม่มีสิทธิเข้าถึงหน้านี้", Status: false });
  }
};