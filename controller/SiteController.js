import db from "../condb/condb.js"

export const getSite = async(req,res) =>{
    try {
        if(Object.keys(req.body) == 0)
        {
            const site = await db.query("select * from tb_site")
            res.status(200).json({
                message : "data fetched",
                data : site
            })
        }
        else {
            const site = await db.query(`select * from tb_site where nama_site like '%${req.body.sitename}%'`)
            res.status(200).json({
                message : "data fetched",
                data : site
            })
        }
        
    }
    catch{
        console.log("error terjadi silahkan hubungi developer")
        res.redirect("/site")
    }
}

export const postSite = async(req, res) => {
    try {
        const site = await db.query(`insert into tb_site(nama_site) values('${req.body.sitename}');`)
        res.status(201).json({
            message : "data inserted",
            data : site
        })
    }
    catch {
        console.log("error silahkan hubungi developer")
        res.redirect("/site")
    }

}