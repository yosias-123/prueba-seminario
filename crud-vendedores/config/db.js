const mysql = require("mysql2/promise");

// Actualizacion del root
const pool = mysql.createPool({
  host: "ballast.proxy.rlwy.net",
  user: "root",
  password: "qlhjQnyksqNlMrWFnvvsjCztQAZqFavv",
  database: "railway",
  port: 47127,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Función para probar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos");

    // Realizar una consulta de prueba
    const [rows] = await connection.query("SELECT 1");
    console.log("Consulta de prueba exitosa");

    connection.release();
    return true;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    return false;
  }
}

// Ejecutar la prueba de conexión
testConnection();

module.exports = pool;
