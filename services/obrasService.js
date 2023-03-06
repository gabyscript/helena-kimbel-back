
const pool = require('../database');
const format = require('pg-format');

const list = async ({ limits = 3, page = 1}) => {
    try {        
        const offset = (page - 1) * limits;
        const formattedQuery = format('SELECT * FROM obras LIMIT %s OFFSET %s', limits, offset);
        pool.query(formattedQuery);        
        const { rows: obras } = await pool.query(formattedQuery)
        return obras
    } catch (error) {
        console.error("Hubo un error al obtener las obras ", error);
        return [];
    }
};

const findOne = async (id) => {
    try {
        const consulta = "SELECT * FROM obras WHERE id = $1";
        const values = [id];
        const result = await pool.query(consulta, values)
        const [obra] = result.rows
        return obra
    } catch (error) {
        console.error("Hubo un error al obtener las obras", error);
        return [];
    }

}

const makeHATEOAS = (obras) => {

    const results = obras.map((o) => {
        return {
            name: o.nombre,
            href: `obras/obra/${o.id}`
        }
    }).slice(0,4);
    const total = obras.length;
    const pagination = {
        page: 1, 
        limit: 3,
        totalPage: 2
    }
    const HATEOAS = {
        total,
        data: obras,
        results,
        message: "success"
    }
    return HATEOAS
}


module.exports = {
    list,
    findOne,
    makeHATEOAS
};
