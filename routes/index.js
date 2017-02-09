// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	//console.log(data.friends);
	//console.log(data.friends.name);
	//console.log(data.friends[0]);
	//console.log(data.friends[0].name);
	res.render('index', data);
		
		//'frienddata': data //,
		//'friendDescription': data.description,
		//'friendImage': data.imageURL
}