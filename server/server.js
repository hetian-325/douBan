var express = require("express");
var app = express();
var mongoose = require("mongoose");
var crypto = require("crypto");
var bodyParser = require("body-parser");
var uE = bodyParser.urlencoded({extended:false});
var jwt = require("jsonwebtoken");

var dbCollection = mongoose.model("servers",{
    uname:String,
    pwd:String,
    email:String,
    imgs:String
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

app.get("/zhuce",function(req,res){
    let uname = req.query.uname;
    let pwd = req.query.pwd;
    let email = req.query.email;
    // console.log(uname+"----"+pwd)
    let newPwd = crypto.createHash('md5').update(pwd).digest('hex');

    mongoose.connect("mongodb://localhost:27017/three",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            dbCollection.find({uname}).then((ok)=>{
                if(ok.length>0){
                    res.send({mes:"注册失败",status:500,linkid:1})
                }else if(ok.length==0){
                    let useDom = new dbCollection({
                        uname,
                        pwd:newPwd,
                        email,
                        imgs:'user.jpg'
                    })
                    useDom.save().then(
                        (ok)=>{
                            res.send({mes:"注册成功",status:200,linkid:0})
                    })
                }
            })
        }
    })
})

app.get("/txiang",function(req,res){
    let imgs = req.query.imgs;
    let uname = req.query.uname;
    // console.log(imgs+"----"+uname)
    mongoose.connect("mongodb://localhost:27017/three",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            // dbCollection.update({uname},{$set:{imgs}}) 错误写法
            dbCollection.updateOne({"uname":uname},{$set:{"imgs":imgs}}).then((ok)=>{
                //这个必须写
            })
        }
    })
})

app.get("/show",function(req,res){
    let uname = req.query.uname;
    // console.log(uname)
    mongoose.connect("mongodb://localhost:27017/three",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            dbCollection.find({uname}).then((ok)=>{
                if(ok.length>0){
                    res.send({imgs:ok[0].imgs})
                }
            })
        }
    })
})

app.post("/denglu",uE,function(req,res){
    let email = req.body.email;
    let pwd = req.body.pwd;
    // console.log(uname+"----"+pwd)
    let newPwd = crypto.createHash('md5').update(pwd).digest('hex');

    mongoose.connect("mongodb://localhost:27017/three",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            dbCollection.find({email,pwd:newPwd}).then(
                (ok)=>{
                    if(ok.length>0){
                        // console.log(ok)
                        let obj = {
                            loginOk:true,
                            uname:ok[0].uname
                        }
                        let mi="asdfasfsafdgdg14432";

                        let token = jwt.sign(obj,mi);

                        res.send({mes:"登录成功",status:200,linkid:2,token})
                    }else if(ok.length==0){
                        res.send({mes:"登录失败",status:200,linkid:3})
                    }
            },(err)=>{
                res.send({mes:"连接超时",status:500,linkid:4})
            })
        }
    })
})

app.get("/douban",function(req,res){
    let token = req.query.token;
    let mi = "asdfasfsafdgdg14432";

    jwt.verify(token,mi,function(err,data){
        // console.log(data)
        if(data.loginOk==true){
            res.send({status:200,linkid:5,uname:data.uname})
        }else{
            res.send({status:500,linkid:6})
        }
    })
})

app.listen(3000);