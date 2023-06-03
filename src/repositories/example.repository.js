const db = require("../database/models");

exports.repoExample = async () => await db.Example.findAll();