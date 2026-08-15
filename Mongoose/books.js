const mongoose = require("mongoose");


// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then((res) => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new mongoose .Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"]
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Math",
    author: "RD sharma",
    price: 400,
})
let book2 = new Book({
    title: "sci",
    // author: "RD sharma",
    price: 400,
})
let book3 = new Book({
    title: "Marvel hero",
    // author: "RD sharma",
    price: 350,
    // category: "comics",
    genre: ["comics", "superhero", "fiction"]
})
// book1.save()
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// book2.save()
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// book3.save()
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

Book.findByIdAndUpdate("6a7e0a875f7de49b07c9f3dc", {price: -100},{runValidators: true})
.then((res) => console.log(res))
.catch((err) => console.log(err.errors.price.properties.message))