const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()

router.get('/bills', (req, res) => {
  fetch('https://congress.api.sunlightfoundation.com/bills')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  // turn into json
  // structure Object
  // respond with structured object
})

module.exports = router
