import db from "../condb/condb.js"

export const getTodoList = async(req,res) => {
    const todo = await db.query(`select * from tb_todo_view where id_projek =${req.params.idprojek}`)
    res.json({
        message: "data fetched",
        data : todo
    })
}

export const addTodoList = async(req,res) => {
    try {
        const addtodo = await db.query(`insert into tb_todo(todo, deskripsi, id_projek, id_status) values ('${req.body.todo}',
        '${req.body.deskripsi}',${req.params.idprojek}, ${req.body.id_status});`)
        res.status(201).json({
        message: "data added",
        data : addtodo
        })
    }
    catch {
        console.log("error saat memasukan data")
        res.redirect(`/todo/:${req.params.idprojek}`)
    }

}