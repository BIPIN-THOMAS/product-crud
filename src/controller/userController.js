//login

const User = require('../model/userModel'); 

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
      return
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//user registration

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ error: false, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Server Error' });
  }
});

module.exports = router;


//add product

exports.createProduct = async (req, res) => {
  console.log("reqbody=", req.body);
  const {productname,price,description,image}= req.body;
  try {
      const existingProduct=await Product.findOne({productname});
      if(existingProduct){
          res.status(400).json({error: true,status:false, message: "product  already available" });
          return
      }
  const {productname,price,description,image}= req.body;
      const newsproduct=new Product({productname,price,description,image:req.file.filename});
      await newsproduct.save()
      res.status(200).json({ error: false,status:true, message: "product added", data: newsproduct })
      }
      
   catch(error) {
      console.log(error);
       res.status(400).json({ error: true,status:false, message: "Server Error" });
  }
};

