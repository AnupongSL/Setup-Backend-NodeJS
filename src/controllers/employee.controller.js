const employeeService = require("../services/employee.service");

exports.getEmployeeAll = async (req, res) =>
  res.json(await employeeService.servEmployeeAll());

exports.addEmployee = async (req, res) => {
  const result = await employeeService.servByUsernameEmployee(
    req.body.username
  );
  if (result != "") {
    res.status(200).json({
      msg: "username ถูกใช้ไปแล้ว กรุณาใช้ username อื่น",
      Status: false,
    });
  } else {
    const newData = await employeeService.servAddEmployee(
      req.body
    );
    res
      .status(200)
      .json({ newData, msg: "เพิ่มข้อมูลพนักงานเรียบร้อยแล้ว", Status: true });
  }
};
exports.loginEmployee = async (req, res) => {
  const { username, password } = req.body;
  const result = await employeeService.servByUsernameEmployee(
    username
  );
  if (result != "") {
    const checkPassword = result[0]["password"];
    if(password == checkPassword){
      const token = await employeeService.servLoginEmployee(username);
      res.json({ token });  
    } else {
      res.status(200).json({ msg: "รหัสผ่านไม่ถูกต้อง", Status: false });      
    }
  } else {
    res.status(200).json({ msg: "ไม่พบผู้ใช้งานในระบบ", Status: false });
  }
}