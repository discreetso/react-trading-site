const {model} = require('mongoose');

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };

// TradFi Bulls database cluster username and password
// username: gtasphalt9_db_user
// password: deVt3rGAwYg8675N  
