const exampleService = require("../services/example.service")

exports.getExample = async (req, res) =>
  res.json(await exampleService.servExample());