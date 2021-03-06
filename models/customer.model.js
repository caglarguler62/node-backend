let mongoose = require('mongoose');

let schema = new mongoose.Schema(
	{name:String,
     email:String,
     phone:Number,
     city:String,
     country:String,
     itemsSold:Array,
     jobProfile: String,
     additionalInfo: String,
     isActive: Boolean
	}, 
	{ timestamps: true }
	);
schema.method("toJSON", function() {
	let { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
	});

let Customer = mongoose.model("customer", schema);  /* customer ismi tekil olarak veritabanındaki isimle aynı olmalıdır.*/

module.exports = Customer;