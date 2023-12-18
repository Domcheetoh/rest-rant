const router = require('express').Router()

router.post('/', (req, res) => {
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id] })
    }
  })
  
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

