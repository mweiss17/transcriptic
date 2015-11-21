var im, async;
im = require("imagemagick"); 
async = require("async");

var image_url = "images/pic.jpg";
var output_url = "images/output/output"
var tile_size = 256;

// open a file from image_url 
Jimp.read(image_url, function (err, image) {
    if (err) throw err;
    console.log(image.bitmap.width + ", " + image.bitmap.height);

    //create coordinate map
    var coordinates = [];
    for(var i = 0; i < image.bitmap.width; i+=tile_size){
    	for(var j = 0; j < image.bitmap.height; j+=tile_size){
    		coordinates.push({"x":i, "y":j, "w":tile_size, "h":tile_size});
    	}
    }

    async.map(coordinates, crop_image, function (err){
        console.log("inside async map");
    });
});

    var crop_image = function(coordinate){
    	Jimp.read(image_url, function (err, image) {
	    	console.log(coordinate.x, coordinate.y, coordinate.w, coordinate.h);
			image.crop(coordinate.x, coordinate.y, coordinate.w, coordinate.h)        // resize 
		         .quality(100)                // set JPEG quality 
		         .write(output_url+coordinate.x+coordinate.y+".jpg");		  // save 
	    });
	    }

