const mongoose = require("mongoose");
const Chat = require("./models/chats")


main().then((res) => console.log("connection succesful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


let allchats = [
    {
        from: "neha",
        to: "pretti",
        msg: "Hello!",
        created_at: new Date(),
    },
    {
        from: "pretti",
        to: "neha",
        msg: "Hey Neha!",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "pretti",
        msg: "How are you?",
        created_at: new Date(),
    },
    {
        from: "pretti",
        to: "neha",
        msg: "I am good. What about you?",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "pretti",
        msg: "I am also good!",
        created_at: new Date(),
    },
    {
        from: "pretti",
        to: "neha",
        msg: "That's great!",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats)

