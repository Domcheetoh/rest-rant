const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

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
router.get('/new', (req, res) => {
  res.render('places/new')
})
module.exports = router 