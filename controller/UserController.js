import db from "../condb/condb.js"

export const getUsers = async(req,res) => {
    if(Object.keys(req.body) == 0){
        const users = await db.query(`select * from usersTable;`)
        res.json({
            message: "fetched",
            data: users
        })
    }
    else{
        const users = await db.query(`select * from usersTable where username like '%${req.body.username}%';`)
        res.json({
            message: "fetched",
            data: users
        })
    }
    
}

export const postUsers = async(req,res) => {
    const userIsExists = await db.query(`select * from usersTable where username = '${req.body.username}';`)
    if(userIsExists != 0){
        res.json({
            message: "username sudah ada silahkan daftar kembali"
        })
    // console.log(Object.keys(userIsExists).length)
    }
    else {
        const users = await db.query(`insert into usersTable(id_role, nama, email, username, password, created, updated)
            values(1,'${req.body.nama}','${req.body.email}','${req.body.username}','${req.body.password}',curdate(),curdate());`)
        res.status(201).json({
            message:"berhasil"
        })
    }
}

// export const getUsers = async(req, res) => {
//     try {
//         const response = await User.findAll();
//         res.status(200).json({
//             message : "succes",
//             response : response
//         })
//     }
//     catch {
//         console.log(error.message)
//     }
// }