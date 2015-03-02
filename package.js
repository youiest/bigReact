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

	if(api.export){
		// api.export("log",["server","client"]);
	}
});