const hrService = require("../services/hr.service");

exports.addHr = async (req, res) => {
  const result = await hrService.servByUsernameHr(req.body.username);
  if (result != "") {
    res.status(200).json({
      msg: "username ถูกใช้ไปแล้ว กรุณาใช้ username อื่น",
      Status: false,
    });
  } else {
    const newData = await hrService.servAddHr(req.body);
    res
      .status(200)
      .json({ newData, msg: "เพิ่มข้อมูล Hr เรียบร้อยแล้ว", Status: true });
  }
};

exports.loginHr = async (req, res) => {
  const { username, password } = req.body;
  const result = await hrService.servByUsernameHr(username);
  if (result != "") {
    const checkPassword = result[0]["password"];
    if (password == checkPassword) {
      const token = await hrService.servLoginHr(username);
      res.json({ token });
    } else {
      res.status(200).json({ msg: "รหัสผ่านไม่ถูกต้อง", Status: false });
    }
  } else {
    res.status(200).json({ msg: "ไม่พบผู้ใช้งานในระบบ", Status: false });
  }
};