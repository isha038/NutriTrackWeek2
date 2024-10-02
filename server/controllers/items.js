import {pool} from '../config/database.js'

const getItems = async (req,res) =>{
    try{
        const results = await pool.query('SELECT * FROM items ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch(error){
        res.status(400).json({error: error.message})

    }
}

export default {
    getItems
}