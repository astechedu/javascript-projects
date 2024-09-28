const res = require('express/lib/response')
const User = require('../models/userModel.js')

const insertUser = async (req,res) => {

    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password,
        })

        const result = await user.save()
        res.send("Register has been successfull. "+result)   //For api
        //res.redirect('/')    //For pug templage
        
    } catch (error) {
        res.send(error.message)
    }
}

const getAllUsers = async (req,res) => {

    try {  
        const usersData = await User.find({})
        if(!usersData){
            return res.status(404).json({message: "User data not found"})
        }
        res.status(200).json(usersData)       //For api
        //console.log(usersData)       
        //res.render('index', {title: "index", data: usersData})   //For pug template

    } catch (error) {        
        res.send(error.message)
        //res.status(500).json({erro:error})
    }
}

const getOne = async (req,res) => {

    try {  
        const id = req.params.id

        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).json({mes: "User not found"})
        }
        res.status(200).json(userExist)

    } catch (error) {        
        res.send(error.message)
        //res.status(500).json({erro:error})
    }
}

const getUser = async (req,res) => {

    try {  
        const id = req.params.id

        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).json({mes: "User not found"})
        }
        res.status(200).json(userExist) //for api
        //console.log(userExist)       
        //res.render('users', {title:"users", data: userExist})  //For pug template

    } catch (error) {        
        res.send(error.message)
        //res.status(500).json({erro:error})
    }
}

const deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        const removeUser = await User.deleteOne({_id:id})
        if(!removeUser){
            res.status(200).json({message: "User not found"}) //For  api            
        }
        res.status(200).json({message: "User Deleted Successfully"}) //For  api
        //res.redirect('/')    //For pug template
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
     insertUser, 
     getAllUsers,
     getOne,
     getUser,
     deleteUser
    }

