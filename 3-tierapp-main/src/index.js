require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path")
const adminRoutes = require("./Routes/admin");
const connectDB = require("./Modules/connection");

app.use(express.json());
app.use(cors("*"));



app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});

app.use(express.static(path.join(__dirname, '../dist-admin')));
app.use(express.static(path.join(__dirname, '../dist-web')));
// app.use(express.static(path.join(__dirname, '../dist-admin-pro')));
// app.use(express.static(path.join(__dirname, '../dist-web-pro')));

app.use('/adminPanel*', (req, res) => {
	console.log(req.url,'param')
    res.sendFile(path.join(__dirname,"../dist-admin/index.html"));
  });

  app.get('/panel*', (req, res) => {
    res.sendFile(path.join(__dirname,"../dist-web/index.html"));
  });





app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
