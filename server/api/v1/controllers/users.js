"use strict";

const logger = require("winston");
/*
  tiene una gran cantidad de utilidades y una de ellas es el "merge"
  que permite mezclar dos objetos
*/
const _ = require("lodash");

// Una vez definido el Schema o clase users de la DB
// procedemos a utilizarlo en nuestro controlador.
const User = require("./../schemas/users");

exports.all = (req, res, next) => {
  // VERSION SIN PROMESAS
    // User.find( (err, users) => {
    //     if (err) {
    //         next(new Error(err));
    //     }else{
    //         res.json(users);
    //     }
    // });

  // VERSION CON PROMESAS
      User.find()
        .then( users => {
            res.json(users);
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.post = (req, res, next) => {
    let body = req.body;
    // Sanatize input

    let newUser = new User(body);

  // VERSION SIN PROMESAS
    // newUser.save( (err, user) => {
    //     if (err) {
    //         next(new Error(err));
    //     }else{
    //         res.json(user);
    //     }
    // });

  // VERSION CON PROMESAS
    newUser.save()
    .then( user => {
        res.json(user);
    })
    .catch( err => {
        next(new Error(err));
    });

    /*
    En el código anterior tenemos los siguientes pasos:
  1 Creamos nuestro nuevo objeto a partir del "payload" que
    recibimos en la petición (req); una cosa a tener en cuenta
    es el saneamiento de los datos antes de pasarlos directamente
     a la base de datos, lo cual veremos mas adelante.

  2 Invocamos la función save, la cual tiene un "callback" que
    tiene como "signature" el primer argumento el objeto de error
    (así como los métodos de Node JS) y luego el argumento user
    que recibimos el objeto creado de la base de datos, es importante
    resaltar que este "callback" es un método asíncrono.

  3 En el momento que se realice el llamado del callback lo primero
    que se comprueba si hay algún error, si es así llamamos a la función
    next con el error recibido. Si no devolvemos en el objeto de respuesta
    el usuario creado.
    */
};

exports.get = (req, res, next) => {
    const user = req.user;
    res.json(user);
};

exports.put = (req, res, next) => {
    const body = req.body;
    //Sanatize input

    const user = _.merge(req.user, body);

    user.save()
        .then( updated => {
            res.json(updated);
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.delete = (req, res, next) => {
    const user = req.user;

    user.remove()
        .then(removed => {
            res.json(removed);
        })
        .catch( err => {
            next(err);
        });
};

exports.params = (req, res, next, id) => {
    User.findById(id)
        .then( user => {
            if (user) {
                req.user = user;
                next();
            } else {
                res.json({
                    "message": "User not found"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};
