const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()

router.get('/bills', (req, res) => {
  fetch('https://congress.api.sunlightfoundation.com/bills')
  .then(response => response.json())
  .then(data => ({
    billNames: data.results.map((bill) => `${bill.official_title.slice(0, 80)}...`)
  }))
  .then(structuredData => res.json(structuredData))
  .catch(err => console.log(err))

  // turn into json
  // structure Object
  // respond with structured object
})

module.exports = router

// var array = [];
//
// array.map(function (Value, Index, array) {
//   //code block
// }, thisArg);
// });
