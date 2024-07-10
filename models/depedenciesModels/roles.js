import {Sequelize} from "sequelize"
import db from "../../config/database.js"

const {DataTypes} = Sequelize

const role = db.define("roleTable", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},
{
    freezeTableName:true
})

export default role

(async () =>{
    await db.sync();
    console.log("table berhasil dibuat")
})();

