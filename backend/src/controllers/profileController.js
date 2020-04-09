const connection = require("../db/connection");

module.exports = {
  async index(request, responde) {
    const ong_id = request.headers.authorization;
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return responde.json(incidents);
  },
};
