"use strict";

const logger = require("winston");
const _ = require("lodash");
const request = require('request-promise');

const SpotifyAuth = require("./../schemas/spotifyAuth");
const config = require("../../../config");

exports.getCode = (req, res, next) => {
    res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + config.my_client_id +
    (config.scopes ? '&scope=' + encodeURIComponent(config.scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(config.redirect_uri));
    // res.send({message: "estas en /spotify"});
};

exports.getToken = (req, res, next) => {
    // res.status(200).send({ code: req.query.code })
    // request({
    //   "method":"GET",
    //   "uri": "https://api.github.com/",
    //   "json": true,
    //   "headers": {
    //     "User-Agent": "My little demo app"
    //   }
    // }).then(console.log, console.log);

    var options = {
      method: 'POST',
      uri: 'https://accounts.spotify.com/api/token',
      form: {
          grant_type: 'authorization_code',
          code: req.query.code,
          redirect_uri: config.redirect_uri,
          client_id: config.my_client_id,
          client_secret: config.client_secret
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
        // 'Authorization': `Basic *<base64 encoded ${config.my_client_id}:${config.client_secret}>`
        //'Authorization': 'Basic ' + (new Buffer(config.client_id + ':' + config.client_secret).toString('base64'))
      },
       json: true // Automatically stringifies the body to JSON
    };

    request(options)
      .then(function (parsedBody) {
        res.status(200).send(parsedBody)
      })
      .catch(function (err) {
          console.log(`error al conectar: ${err}`);
      });
};
