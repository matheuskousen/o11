const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(9000);
// Métodos

// GET : busca informações do back-end
// POST : Criar uma info
// PUT : ALtera uma info
// DELETE : Deletar uma info

// Tipo de parâmentros

//  Query = são paramentros nomeados enviados na rota apos o ?
//     eles são usados para [filtros, paginação  ]
//  Route Params = identificar recursos
// Request Body =
