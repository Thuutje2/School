// Opgave 20:
var MyExceptions = /** @class */ (function () {
    function MyExceptions() {
        //importeer hier de File System module
        this.fs = require('fs');
    }
    ;
    MyExceptions.prototype.creëerFile = function () {
        this.fs.writeFile('file.txt', '{"naam":"juist","e_mail","juist@gmail.com"}', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Bestand was aangemaakt!");
        });
    };
    MyExceptions.prototype.leesFile = function () {
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    };
    // Opgave 21:
    MyExceptions.prototype.delen = function (a, b) {
        if (b == 0) {
            throw new Error("\nDeler kan niet 0 zijn");
        }
        else {
            return a / b;
        }
    };
    return MyExceptions;
}());
// Uitvoeren
var myExceptions = new MyExceptions();
myExceptions.creëerFile();
myExceptions.leesFile();
var resultaat = 0;
try {
    resultaat = myExceptions.delen(1, 0);
}
catch (e) {
    console.log(e.message);
}
