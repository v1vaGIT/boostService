//импорт данных
const express = require('express');
const catalog = require('./catalog');
const cors = require('cors');

const server = express()
//cors для одновременной работы бэка и фронта, не смотря на разные порты
server.use(cors())

//роуты с express чтобы доставать нужные данные с сервера
server.get('/catalog', (req, res) => {
    res.json(catalog)
})


//вызов конкретного товара
server.get('/catalog/:id', (req, res) => {
    const {id} = req.params
    const product = catalog.find(el => el.id === +id)
    res.json(product)
})


//включаю сервер
server.listen(8000, () => {
    console.log('server started on port 8000')
})