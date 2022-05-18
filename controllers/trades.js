
const Trade = require("../models/trades")

exports.createTrade = async(request, response) => {
    const data = request.body

    const trade = await Trade.create(data)

    response.status(201).json(trade)
}


exports.getTrades = async(request, response) => {

    const userId = request.query.user_id
    const type = request.query.type
    const queryFilters = {}

    if(userId) {
        queryFilters.user_id = parseInt(userId, 10)
    }

    if(type) {
        queryFilters.type = type
    }


    const trades = await Trade.findAll({
        where: {
            ...queryFilters
        }
    })

    
    response.status(200).json(trades)
}


exports.getTrade = async(request, response) => {
    const tradeId = parseInt(request.params.id, 10)

    const trade = await Trade.findOne({
        where: {
            id: tradeId
        }
    })

    if(!trade) {
        return response.status(404).send('ID not found')
    }

    response.status(200).json(trade)
}


exports.deleteTrade = (request, response) => {
    response.status(405).json({})
}

exports.modifyTrade = (request, response) => {
    response.status(405).json({})
}



