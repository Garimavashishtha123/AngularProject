const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
});

app.use(cors());
app.use(bodyparser.json());

const { Client } = require('pg');

//database connection
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password:"root",
  database:"Hospital"
})

// check connection
client.connect(err =>{
  if(err) {
    console.log(err,'err');}
    console.log('database connected.');
})

module.get=(app.get);

// app.get('/doctor',(req,res)=>{
//   res.send('get doctors');
// });

app.get('/doctor', (req, res) => {
  let qr = `Select * from public."doctor"`
  client.query({
          text: qr
      })
      .then(result => {

          var data1 = [];
          for (var i = 0; i < result.rows.length; i++) {
              data1.push({
                  name: result.rows[i].name,
                  degree: result.rows[i].degree,
                  time: result.rows[i].time
              });
          }
          res.send(
            data1
          );
      })
      .catch(err => console.log(err, 'errs'));
});

app.listen(3000,()=>{
  console.log('server running...');
});


// client.query(`select * from doctor`,(err, result)=>{
//   if(!err) {
//     console.log(result.rows);
//   }
//   client.end();
// });
