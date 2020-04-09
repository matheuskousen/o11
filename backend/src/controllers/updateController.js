const connection = require("../db/connection");
const crypto = require("crypto");
module.exports = {
  async index(request, response) {
    const urls = await connection("urls").select("*");
    return response.json(urls);
  },
  async create(request, response) {
    const id = crypto.randomBytes(4).toString("HEX");
    const { originalname: name, size, key, location: url = "" } = request.file;
    const post = { name, size, key, url, id };
    await connection("urls").insert(post);
    return response.json(post);
  },
};
