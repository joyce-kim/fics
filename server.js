const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//app.use(routes);

app.get('/api/images', function(req, resp){
	console.log("HEREEEEE");
	resp.send(200);
});
   //  const cloudName = 'ddn00kubl';

   //  const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/resources/search';

   //  const timestamp = Date.now()/1000
   //  const uploadPreset = 'qbs7mxp8';

   //  const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'dgK4gcLQX_6AupWSB7csv5R4U68';

   //  const signature = sha1(paramsStr);

   // const params = {
   //    'api_key': '714671874936964',
   //    'timestamp': timestamp,
   //    'upload_preset': uploadPreset,
   //    'signature': signature,
   //    'Authorization': 'Basic 714671874936964:dgK4gcLQX_6AupWSB7csv5R4U68'
   //  };

   //  let uploadRequest = superagent.get(url);

   //  Object.keys(params).forEach((key) => {
   //    uploadRequest.field(key, params[key])
   //  });


   //  uploadRequest.end((err, res) => {
   //    if (err){
   //      alert(err);
   //      return;
   //    }

   //   console.log("UPLOAD COMPLETE: " + JSON.stringify(res.body));
   //   resp.send({data: resp.body});
      // const uploaded = res.body;

      // let updatedImages = Object.assign([], this.state.images);
      // updatedImages.push(uploaded);

      // this.setState({
      //   images: updatedImages
      // })
    // }

// Set up promises with mongoose
//mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/ficsdb",
//   {
//     useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
