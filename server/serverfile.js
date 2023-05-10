var express = require('express')
var fs = require('fs');
var app = express()
app.use(express.json())
var fs = require('fs');
let data =[{id:1,name:"hanu"},{id:2,name:"hanu1"}]
app.get('/getdata',function(req,res){
    res.send(data);
})

app.post('/postdata',function(req,res){
    res.send(req.body)
   })
app.post('/addtocart',function(req,res){
    fs.appendFileSync('./data/addtocart.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/addtocart.json', "\n","utf8")
    res.send(req.body)
 })


 app.post('/enrollcourse',function(req,res){
   let result = fs.appendFileSync('./data/addtocart.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/addtocart.json', "\n","utf8")
    let resultdata=""
    if(!result){
        resultdata={success:true,message:"enroll successfully"}
    }
    else{
        resultdata={success:false,message:"enroll not  successfully"}
        
    }
    res.send(resultdata)
 })
 
 app.post('/register',function(req,res){
    let result=fs.appendFileSync('./data/userdata.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/userdata.json', "\n","utf8")
    let resultdata=""
    if(!result){
        resultdata={success:true,message:"data insert successfully"}
    }
    else{
        resultdata={success:false,message:"data not insert successfully"}
        
    }
    res.send(resultdata)
 })

 
 app.post('/login',function(req,res){
    let data=fs.readFileSync('./data/userdata.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
    console.log(add1);
    let resultlog="";
    add1.map(d=>{
        if(d.username===req.body.email ||d.email===req.body.email && d.password===req.body.password  ){
            resultlog={success:true,message:"user login successfully"}
        }else{
            resultlog={success:false,message:"user not login successfully"}
        }
    })
    res.send(resultlog)
 })


   
    app.post('/showenroll',function(req,res){
    let data=fs.readFileSync('./data/addtocart.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
   let cartitem=[]
   
    add1.map(d=>{
        if(req.body.user === d.user){
                cartitem.push(d);
        }
    })
   
    res.send(cartitem)
 })



app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(`server started ${8080}`);
})