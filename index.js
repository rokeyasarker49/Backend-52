const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const users = [
	{
		id: 1,
		name: "Ayman Sadiq",
		age: 28,
		profession: "Teacher",
		email: "aymansadiq@gmail.com",
		address: "Dhaka, Bangladesh",
	},
	{
		id: 2,
		name: "Munzereen Shahid",
		age: 26,
		profession: "English Teacher",
		email: "munzereenshahid@gmail.com",
		address: "Dhaka, Bangladesh",
	},
	{
		id: 3,
		name: "Sumit Saha",
		age: 32,
		profession: "Entrepreneur",
		email: "sumitsaha@gmail.com",
		address: "Dhaka, Bangladesh",
	},
	{
		id: 4,
		name: "Jhankar Mahbub",
		age: 35,
		profession: "Web Developer",
		email: "jhankarmahbub@gmail.com",
		address: "United States",
	},
	{
		id: 5,
		name: "Rokeya Sarker",
		age: 22,
		profession: "Student",
		email: "rokeyasarker@gmail.com",
		address: "Keraniganj, Dhaka, Bangladesh",
	},
	{
		id: 6,
		name: "Torikul Islam Sajid",
		age: 21,
		profession: "Job Holder",
		email: "torikulislamsajid@gmail.com",
		address: "Foridpur, Dhaka, bangladesh",
	},
];

app.get("/", (request, response) => {
	response.send("Learn-Server-02");
});

app.get("/users", (request, response) => {
	response.send(users);
});

app.post("/users", (request, response) => {
	const inputUser = request.body;
	users.push(inputUser);
	response.send(users);
});

app.listen(port, () => {
	console.log(`This app listening on ${port}`);
});
