const express = require('express');
const app = express();
const mongoose = require('./connection');
const Register = require('./registers');



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/products.html');
});

app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/cart.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/product_detail', (req, res) => {
    res.sendFile(__dirname + '/product detail.html');
});




app.use(express.static(__dirname + '/E-com'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Backend route for handling signup form submission
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new Register({
            name: name,
            email: email,
            password: password
        });

        
        const savedUser = await newUser.save();

        
        res.redirect('/login');
    } catch (error) {
        console.error("Error registering user:", error); 
        res.status(400).send("Error registering user: " + error.message); 
    }
});



app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists in the database
      const user = await Register.findOne({ email });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).send('Incorrect password');
      }
  
      // If both email and password are correct, redirect to index page
      res.redirect('/index');
  
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('Internal server error');
    }
  });


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
