const db = require("mysql");

class DBConnection { 
    constructor(capy) {
        this.app = capy.app 
        this.connCredentials = {
            host: "localhost",
            user: "root",
            password: "pass",
            database: "ahoycapy",
        };
        this.dbConn = db.createConnection(this.connCredentials);
        this.accessDB();
    }
    accessDB() {
        this.dbConn.connect((e) => {
            if (e) {
                console.error("Error - Unable to connect to database: ", e);
                return;
            } else {
                console.log("Successfully connected to the database");
            }
        });
        this.app.on("close", (e) => {
            this.dbConn.end((e) => {
                if (e) {
                    console.error("Error - Unable to close database: ", e);
                } else {
                    console.log("The database connection was closed successfully!");
                }
            });
        });
    }
}

module.exports = DBConnection