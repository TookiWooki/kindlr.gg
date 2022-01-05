// copied from https://danbeyer.github.io/steamapi/page2.html
// use this as a tutorial to get started with the custom server
// As far as I understand, in order to use Steam API, I need the API key to be secret at all times (can't push API key to browser) -
// - so this is why the need for a custom server arises. 


////////////////////////
//Uncomment to begin///
//////////////////////

// var express = require('express');

// var app = express();
// var request = require('request');

// app.set('port', 3000);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Here gets parameters from end of URL to use in api address.  These parameters will come from submit buttons 
// // on the respective sites
// app.get('/getnews', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// 	var url = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' + qParams[0].name + '&count=3&maxlength=300&format=json';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getachievementsperc', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// 	var url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=' + qParams[0].name + '&format=json';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// //Requires AppId and name of achievement
// app.get('/getglobalstats', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// 	var url = ' http://api.steampowered.com/ISteamUserStats/GetGlobalStatsForGame/v0001/?format=json&appid=' + qParams[0].name + '&count=1&name[0]=' + qParams[0].value;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getplayersummary', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXX&steamids=' + qParams[0].name;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getfriendlist', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=' + qParams[0].name + '&relationship=friend';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getplayerachievements', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamid=' + qParams[0].name;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// //Requires AppId and playerID
// app.get('/getuserstats', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=' + qParams[0].name + '&key=XXXXXXXXXXXXXXXXX&steamid=' + qParams[0].value;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getownedgames', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=' + qParams[0].name + '&format=json';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getrecentlyplayed', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=' + qParams[0].name + '&format=json';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/isplayingshared', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/IPlayerService/IsPlayingSharedGame/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=' + qParams[0].name + '&appid_playing=' + qParams[0].value + '&format=json';
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getschema', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = ' http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=XXXXXXXXXXXXXXXXX&appid=' + qParams[0].name;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.get('/getbans', function(req, res) {
// 	var qParams = [];
// 	for (var p in req.query) {
// 		qParams.push({'name':p, 'value':req.query[p]})
// 	}
// var url = 'http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=XXXXXXXXXXXXXXXXX&steamids=' + qParams[0].name;
// 	request(url, function(err, response, body) {
// 		if(!err && response.statusCode < 400) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});	
// });

// app.use(function(req,res){
//   res.type('text/plain');
//   res.status(404);
//   res.send('404 - Not Found');
// });

// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.type('plain/text');
//   res.status(500);
//   res.send('500 - Server Error');
// });

// app.listen(app.get('port'), function(){
//   console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
// });



///////////////////////////////////////////////////////////////////////////
//Next step is to get AJAX working to communicate with the server calls///
/////////////////////////////////////////////////////////////////////////
//https://danbeyer.github.io/steamapi/page3.html


//////////////////////////////////////////////////////////////////////////////
//Once we recieve the API json information we need to do something with it///
////////////////////////////////////////////////////////////////////////////
//https://danbeyer.github.io/steamapi/page5.html