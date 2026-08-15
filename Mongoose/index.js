const mongoose = require("mongoose");


// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then((res) => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "shiva",
//     email: "shiva@gmail.com",
//     age: 48,
// });

// const user2 = new User({
//     name: "golu",
//     email: "golu@gmail.com",
//     age: 69,
// });


// user1.save();

// user2.save()
// .then((res) => {
//     console.log("saved");
// })
// .catch((err) => {
//     console.log(err);
// })

// User.insertMany([
//     {name: "tony", email:"tony@gmail.com",age: 21},
//     {name: "stark", email:"stark@gmail.com",age: 31},
//     {name: "spider", email:"spider@gmail.com",age: 11},
// ])
// .then((res) => {
//     console.log("saved")
//     // console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// User.findOne({_id   : "6a7de83572d4ec6e64ab5be7"}).then(res => console.log(res))
// .catch((err) => console.log(err))


// User.findOneAndUpdate({name: "tony"}, {age: 356},{new: true})
// .then(res => console.log(res))
// .catch((err) => console.log(err))


// User.findById("6a7de83572d4ec6e64ab5be7").then(res => console.log(res))
// .catch((err) => console.log(err))


User.findOneAndDelete({name: "stark"})
.then((res) => console.log(res))
.catch((err) => console.log(err));


