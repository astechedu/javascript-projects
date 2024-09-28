const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

	name: {
		type: String,
		require: true		
	},
	price: {
		type: Number,
		require: true		
	},
	quantity: {
		type: Number,
		require: true
	},	
})

module.exports = mongoose.model('Product, productSchema')

//Or
//const Product = mangoose.model('Product', productSchema)
// module.export = Product