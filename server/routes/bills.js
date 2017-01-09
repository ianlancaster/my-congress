const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()

router.get('/api/bills', (req, res) => {
  fetch('https://congress.api.sunlightfoundation.com/bills')
  .then(response => response.json())
  .then(data => ({
    billNames: data.results.map(bill => `${bill.official_title.slice(0, 70)}...`),
    json: data
  }))
  .then(structuredData => (res.json(structuredData)))
  .catch(err => res.json(err))
})

module.exports = router
