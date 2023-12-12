const express = require("express");
const bodyParser = require("body-parser");
const DBServer = require("./db/db_conn.js");

class HomeScreen {
    constructor(capy) {
        this.ahoycapy = capy
    }
    home(req, res) {
        this.ahoycapy.db.dbConn.query("SELECT * FROM locations", (e, data, vals) => {
            if (e) throw e;
            res.send(res.json(data));
        });        
    }
}

class Accounts {
    constructor(capy) {
        this.ahoycapy = capy;
    }
    retrieve(req, res) {
        this.ahoycapy.db.dbConn.query("SELECT * FROM accounts", (e, data, vals) => {
            if (e) throw e;
            res.send(data);
        });
    }
    create(req, res) {
        console.log(req.body);
        res.send(req.body);
    }
    login(req, res) {
        console.log(req.body);
        res.send(req.body);
    }
}

class AhoyCapy {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.db = new DBServer(this); // Pass App
        this.homescreen = new HomeScreen(this);
        this.accounts = new Accounts(this);
    }
    displayHome() {
        this.app.get('/', (req, res) => {
            this.homescreen.home(req, res);
        });
    }
    displayAccountInfo() {
        this.app.get('/accountInfo', (req, res) => {
            this.accounts.retrieve(req, res);
        });
    }
    createAccount() {
        this.app.post('/createAccount', (req, res) => {
            this.accounts.create(req, res);
        });
    }
    signIn() {
        this.app.post('/signIn', (req, res) => {
            this.accounts.login(req, res);
        });
    }
    setContentType() {
        this.app.use((req, res, next) => {
            res.header("Content-Type", "application/json");
            next();
        });
    }
    serverLogStatus(port) {
        this.app.listen(port, () => {
            console.log(`Server Running on Port ${port}`);
        });
    }
    start(port = 3000) {
        this.displayHome();
        this.displayAccountInfo();
        this.createAccount();
        this.signIn();
        this.setContentType();
        this.serverLogStatus(port);
    }
}

const ac = new AhoyCapy();
ac.start();
