const pool = require("../db/db");
var uuid = require("uuid");

const create = async (req, res) => {
  const { title, content, dueDate, completed } = req.body;

  try {
    let sql;
    let values;
    let id = uuid.v4();
    if (!dueDate) {
      sql =
        "INSERT INTO todo (id, title, content, completed) VALUES (?, ?, ?, ?);";
      values = [id, title, content, completed];
    } else {
      sql =
        "INSERT INTO todo (id, title, content, duedate, completed) VALUES (?, ?, ?, ?, ?);";
      values = [id, title, content, dueDate, completed];
    }
    await pool.query(sql, values);

    sql = "SELECT * FROM todo WHERE id = ?;";
    values = [id];
    const createdTodo = await pool.query(sql, values);
    res
      .status(200)
      .send({ data: [createdTodo[0]], resp: "Todo creado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: [], message: "Error al crear el todo." });
  }
};

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `SELECT * FROM todo WHERE id = ?`;
    const values = [id];
    const todo = await pool.query(sql, values);
    res.status(200).send({ data: todo, resp: null });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: null, resp: "Error al obtener el todo." });
  }
};

const getTodos = async (req, res) => {
  try {
    const sql = `SELECT * FROM todo`;
    const todos = await pool.query(sql);
    res.status(200).send({ data: todos, resp: null });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: null, resp: "Error al obtener los todos." });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const sql = "delete FROM todo WHERE id = ?";
    const values = [id];
    const resp = await pool.query(sql, values);

    if (!resp.affectedRows) {
      throw new Error("Error al eliminar el todo.");
    }

    res.status(200).send({ data: id, resp: "Todo eliminado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: null, resp: "Error al eliminar el todo." });
  }
};

module.exports = {
  create,
  getTodo,
  getTodos,
  deleteTodo,
};
