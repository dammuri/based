import mysql from "mysql2/promise"
import config from "../config/database.js"

const query = async(sql, params) => {
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute(sql, params)
        return result
    
}

export default {query}