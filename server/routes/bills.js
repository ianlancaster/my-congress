const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()

router.get('/api/bills', (req, res) => {
  fetch('https://congress.api.sunlightfoundation.com/bills')
  .then(response => response.json())
  .then(data => ({
    billNames: data.results.map(bill => `${bill.official_title.slice(0, 80)}...`)
  }))
  .then(structuredData => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(structuredData)
  })
  .catch(err => res.json(err))
})

module.exports = router
