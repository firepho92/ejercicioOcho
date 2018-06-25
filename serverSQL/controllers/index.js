'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'auza940220',
  database: 'traductor'
});

connection.connect();

module.exports = function(router) {
    router.get('/', function(req, res) {
        var lang, word;

        lang = req.query.lang;
        word = req.query.word;

        lang = lang == 'eng' ? 'ingles' : 'frances';

        connection.query('SELECT ' + lang + ' FROM traducciones WHERE espaniol = "' + word + '"', function(error, results, fields) {
          if(error) throw error;
          res.send(results[0]);
        });

    });
};
