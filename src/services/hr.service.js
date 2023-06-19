const hrRepository = require("../repositories/hr.repository");
const jwt = require("../middleware/jwt");

exports.servByUsernameHr = async (username) =>
  await hrRepository.repoByUsernameHr(username);

exports.servAddHr = async (hr1) =>
  await hrRepository.repoAddHr({
    ...hr1,
  });

exports.servLoginHr = async (username) => {
  const result = await hrRepository.repoByUsernameHr(username);
  if (result != "") {
    const role = result[0]["role"];
    const payload = {
      role: role
    };
    return jwt.generateToken(payload);
  } else {
    return { message: "กรุณากรอกยูสเซอร์ให้ถูกต้อง" };
  }
}