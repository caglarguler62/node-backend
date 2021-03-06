let express=require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
let router = require("./app/routes/db.routes");

let app = express();
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let corsOptions = {
//     origin: 'http://127.0.0.1:3000',   //bu kısım frontend içindir.
//     optionsSuccessStatus: 200 // eski usül tarayıcı desteği
//   };
  
// app.use(cors(corsOptions));
// 
  
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require("./app/config/db.config");
app.use('/api/customers', router);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

