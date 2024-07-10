import db from "../condb/condb.js"

export const getProject = async(req, res) =>{
    var project
    var projectjson
    if(Object.keys(req.body).length == 0){
        project = await db.query("select * from projek")
        projectjson = JSON.stringify(project)
    }
    else {
        project = await db.query(`select * from projek where nama_projek like '%${req.body.namaprojek}%' or tanggal_selesai like '%${req.body.tanggalselesai}%' or 
            tanggal_mulai like '%${req.body.tanggalmulai}%' or user like '%${req.body.user}%' or
            status like '%${req.body.status}%';`)
    }
    res.json({
        message : "fetched",
        data : project
    })
    // debug
    // console.log(Object.keys(req.body).length)
}

export const postProject = async(req, res) => {
    try{
        const project = await db.query(`insert into projectmngmtDB(nama_projek, deskripsi, tanggal_selesai, tanggal_mulai, user, id_status)
            values('${req.body.nama_projek}', '${req.body.deskripsi}', '${req.body.tanggal_selesai}', curdate(), '${req.body.user}', ${req.body.id_status});`)
        res.status(201).json({
        message : "Success",
        data : project
        })
    }
    catch {
        console.log("data yang anda masukan terjadi error")
        res.redirect('/projek')
    }
}

export const editProject = async(req, res) => {
    try { 
        const project = await db.query(`update projectmngmtDB set nama_projek = '${req.body.namaprojek}', 
            deskripsi = '${req.body.deskripsi}', tanggal_selesai = '${req.body.tanggalselesai}',
            tanggal_mulai = '${req.body.tanggalmulai}', id_status = ${req.body.idstatus} where No = ${req.params.no}`)
        res.json({
            message : "projek updated"
        })
    }

    catch {
        console.log(Error)
    }
}