const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dashboard', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   // create an object to that contains methods for mongoose to interface with MongoDB
   const User = mongoose.model('User', UserSchema);

//    app.post('/users', (req, res) {
//     const user = new User();
//     user.name = req.body.name;
//     user.age = req.body.age;
//     user.save()
//       .then(newUserData => console.log('user created: ', newUserData))
//       .catch(err => console.log(err));
     
//     res.redirect('/');
//   })


// app.get('/', (req, res) => {  
//     User.find()
//         .then(data => res.render("index", {users: data}))
//         .catch(err => res.json(err));
// });