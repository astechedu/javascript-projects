const express = require('express')

const router = express.Router()

router.get('/', async(req,res) => {
	
	console.log('Get Request')
})


module.exports = router