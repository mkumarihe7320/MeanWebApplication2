var express = require('express');
var mongojs=require('mongojs');
var db= mongojs("cs5610353", ["serviceClients"]);
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.get("/serviceClients", function(req, res){
	
	db.serviceClients.find(function(err,docs) {
		res.json(docs);
	});
	
});
app.use(bodyParser());

app.post("/serviceClients", function(req, res) {
	var svc = req.body;
	console.log(svc);
	db.serviceClients.insert(req.body, function(err,doc){
		res.json(doc);
	});
	
});

app.get("/serviceClients/:id", function(req,res) {
	var id =req.params.id;
console.log(id);
db.serviceClients.findOne({_id : mongojs.ObjectId(id)},
function (err, doc){
	res.json(doc);
});
});

  app.put("/serviceClients/:id", function(req,res) {
	db.serviceClients.findAndModify(
	  {_id: mongojs.ObjectId(id)},
		{$set: {name : req.body.name}},
	function(err,doc){
		res.json(doc);
	});
	});
	
	
app.delete("/serviceClients/:id", function(req,res) {
var id =req.params.id;
console.log(id);
db.serviceClients.remove({_id : mongojs.ObjectId(id)},
function (err, doc){
	res.json(doc);
});
});
app.listen(3000);