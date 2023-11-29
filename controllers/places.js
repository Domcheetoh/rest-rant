const router = require('express').Router()

router.get('/', function(req,res){
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables.jpg',
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/moretables.jpg'
      }]
      
    res.render('places/index', {places})
})

  
module.exports = router 