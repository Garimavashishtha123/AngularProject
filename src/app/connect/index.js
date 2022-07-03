const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const db = require("../connect/env");
const client = require("../connect/env");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect((err) => {
  if (err) {
    console.log(err, "err");
  }
  console.log("database Connected....");
});
// module.get = app.get;
// client.query('/Appointment',(req,res)=>{

// console.log('get appointment-list');

// }
// );
app.get("/Appointment", (req, res) => {
  let qr = `Select * from public."Appointment"`;
  db.query({
    // rowMode: "array",
    text: qr,
  })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          Appointmentid: result.rows[i].Appointmentid,
          Fullname: result.rows[i].Fullname,
          Phone: result.rows[i].Phone,
          Email: result.rows[i].Email,
          Age: result.rows[i].Age,
          Appointmentdate: result.rows[i].Appointmentdate,
          Appointmenttime: result.rows[i].Appointmenttime,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

//post method
app.post('/Appointment1',(req,res)=>{

    console.log(req.body,'createdata');

   // let Appointmentid = req.body.Appointmentid;
    // let Fullname = req.body.Fullname;
    // let Phone = req.body.Phone;
    // let Email = req.body.Email;
    // let Age=req.body.Age;
    // let Appointmentdate=req.body.Appointmentdate;
    // let Appointmenttime=req.body.Appointmenttime;
    // let Doctor=req.body.Doctor;
    const user = req.body;
    // console.log(user);
    const name = user.Fullname;
    console.log(name);
    const phone = user.Phone;
    const Email = user.Email;
    const Age = user.Age;
    const Appointmentdate = user.Appointmentdate;
    const Appointmenttime = user.Appointmenttime;

    let insertQuery =`insert into public."Appointment"("Fullname","Phone","Email","Age","Appointmentdate","Appointmenttime")
             values('${name}','${phone}','${Email}','${Age}','${Appointmentdate}','${Appointmenttime}')`;
      console.log(insertQuery,'qr')

    //  client.query(insertQuery,(err,result)=>{

    //  if(err){console.log (err);}

    //  console.log(result,'result');
    //  res.send({
    //    message:'data inserted',
    //   // //  createdata,
    //   //  result
    //  });


    client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  });
  client.end;
});


  //     console.log(result,'result')
  //     res.send({
  //       message:'data inserted'
  //     });
  //   });
  // });

  //Delete data

  app.delete('/Appointment/:Appointmentid', (req, res)=> {
    let insertQuery = `delete from Appointment where Appointmntid=${req.params.Appointmentid}`

    client.query(insertQuery, (err, res)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
  // const deleteappoint = (request, response) => {
  //   const id = parseInt(request.params.Appointmentid)

  //   pool.query('DELETE FROM Appointment WHERE Appointmentid = $1', [Appointment], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).send(`User deleted with ID: ${Appointmentid}`)
  //   })
  // }

  //Update BookingAppointment
  app.put('/Appointment/:Appointmentid', (req, res) => {
    // let Appointmentid = req.params.Appointmentid;
    // let Fullname = req.body.Fullname;
    // let Phone = req.body.Phone;
    // let Email = req.body.Email;
    // let Age=req.body.Age;
    // let Appointmentdate=req.body.Appointmentdate;
    // let Appointmenttime=req.body.Appointmenttime;


    const user = req.body;
      let qr=`UPDATE Appointment SET 'Fullname'=${user.Fullname},'Phone'=${user.Phone} ,'Email' =${user.Email}, 'Age'=${user.Age}, 'Appointmentdate'=${user.Appointmentdate}, 'Appointmenttime'=${user.Appointmenttime}  WHERE Appointmentid = ${user.Appointmentid} `;
      client.query(qr,(err,res)=>{
        if(!err){

        res.sed({
          message:'data updated'
        })
      }else{console.log(err.message)}
      })
    })


    //delete Single data
    app.delete('/Appointment',(req,res)=>
    {
      let qid=req.params.Appointmentid;
      let qr=`delete from user where Appointmentid'='$(qid)'`;
      client.query(qr,(err,res)=>{
        if(err){console.log(err);}
        res.send({
          message:'data deleted'
        } )
   });
  });


app.listen(3000, () => {
  console.log("Server Running");
});

app.get("/doctor", (req, res) => {
  let qr = `Select * from public."doctor"`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
          exit:result.rows[i].exit
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

app.post("/Bookingnew", (req, res) => {
  let qr = `INSERT INTO public."Appointment"(
    "Fullname", "Phone", "Email", "Age", "Appointmentdate", "Appointmenttime")
    VALUES (${Fullname}, ${Phone}, ${Email}, ${Age}, ${Appointmentdate}, ${Appointmenttime});`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

app.post("/Bookingnew", (req, res) => {
  let qr = `DELETE FROM public."Appointment"
	WHERE Fullname='${Fullname}';`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});
// app.listen(3000, () => {
//   console.log("Server Running");
// });
