'use strict';

module.exports = function(router) {
    router.get('/', function(req, res) {
        var lang, word;

        lang = req.query.lang;
        word = req.query.word;

        var spa = ['hola', 'adios', 'dia', 'tarde', 'noche'];
        var eng = ['hello', 'bye', 'day', 'afternoon', 'night'];
        var fr = ['bonjour', 'au revoir', 'jour', 'apres', 'nuit'];

        var index = 0;

        if (word.length !== 0) {
            for (var i = 0; i < spa.length; i++) {
                if (word === spa[i]) {
                    index = i;
                    break;
                }
            }
            if (lang === 'eng') {
                word = eng[index];
            } else {
                word = fr[index];
            }
            res.send(word);
        }else {
            res.send('Ingresa una palabra.');
        }
    });
};
