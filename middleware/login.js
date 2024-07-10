import db from "../condb/condb.js"

export const getUsersLogin = async(req,res) => {
    const users = await db.query(`select * from usersTable where username = '${req.body.username}';`)
    res.json({
        message: "fetched",
        data: users
    })
    return users;
}