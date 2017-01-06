const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()

router.get('/bills', (req, res) => {
  fetch('https://congress.api.sunlightfoundation.com/bills')
  .then(response => response.json())
  .then(data => ({
    billNames: data.results.map(bill => `${bill.official_title.slice(0, 80)}...`)
  }))
  .then(structuredData => res.json(structuredData))
  .catch(err => res.json(err))
})

module.exports = router
