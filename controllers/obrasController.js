
const format = require('pg-format');
const obrasService = require('../services/obrasService');

const list = async (req, res) => {
  try {
    const queryStrings = req.query;
    const obrasList = await obrasService.list(queryStrings);
    const HATEOAS = await obrasService.makeHATEOAS(obrasList)
    return res.status(200).send(HATEOAS);
  } catch (err) {
    console.error(err);
    res.status(500).send([]);
  }
};

const findOne = async (req, res) => {
  try {
    const {id} = req.params;
    const obraId = await obrasService.findOne(id);
    return res.status(200).send(obraId)    
  } catch (err) {
    console.error(err);
    res.status(500).send([])
  }
}

module.exports = {
  list,
  findOne
};