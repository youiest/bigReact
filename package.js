Package.describe({
  summary: "bigReact"
});

Npm.depends({
});

Cordova.depends({
    
});

Package.on_use(function (api) {
	api.use(["coffeescript"])
	api.add_files(['common.coffee'], ['server','client']);	
	api.add_files(['server.coffee'], ['server']);	
	api.add_files(['client.coffee'], ['client']);	
	if(api.export){
		api.export("bigreact",["server","client"]);
	}
});