const employeeRepository = require("../repositories/employee.repository");
const jwt = require("../middleware/jwt");

exports.servEmployeeAll = async () =>
  await employeeRepository.repoEmployeeAll();

exports.servByUsernameEmployee = async (username) =>
  await employeeRepository.repoByUsernameEmployee(username);

exports.servAddEmployee = async (employee1) =>
  await employeeRepository.repoAddEmployee({
    ...employee1,
  });

exports.servLoginEmployee = async (username) => {
  const result = await employeeRepository.repoByUsernameEmployee(username);
  if (result != "") {
    const fullName = result[0]["fullname"];
    const userName = result[0]["username"];
    const role = result[0]["role"];
    const payload = {
      nameEm: fullName,
      usernameEm: userName,
      role: role
    };
    return jwt.generateToken(payload);
  } else {
    return { message: "กรุณากรอกยูสเซอร์ให้ถูกต้อง" };
  }
}