const connection = require("../db/connection");
const crypto = require("crypto");
module.exports = {
  async index(request, response) {
    const ong = await connection("ong").select("*");
    return response.json(ong);
  },

  async create(request, response) {
    const { name, whatsapp, city, uf, email, senha } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");
    // const senha = crypto.randomBytes(9).toString("BCRYPT");

    // connection to banco de base
    await connection("ong").insert({
      id,
      name,
      email,
      senha,
      whatsapp,
      city,
      uf,
    });
    console.log(senha);
    return response.json({ id });
  },
};
