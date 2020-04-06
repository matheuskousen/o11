//  ## here the only responsibility that her will have  if, she is  exist ##

const connection = require("../db/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({ error: "No ONG Found with this ID" });
    }
    return response.json(ong);
  }
};
