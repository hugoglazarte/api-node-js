"use strict";

const logger = require("winston");

const Post = require("./../schemas/posts");

exports.params = (req, res, next, id) => {
    Post.findById(id)
        .populate("author categories")
        /*
        La función populate nos permite especificar qué campos
        queremos "rellenar" con información y adicionalmente
        necesita la función exec para ejecutarlo.
        */
        .exec()
        .then( post => {
            if (post) {
                req.post = post;
                next();
            } else {
                res.json({
                    "message": "Post not found"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};


exports.all = (req, res, next) => {
    Post.find()
    .populate("author categories")
    .exec()
    .then( posts => {
      res.json(posts);
      // res.json({message: "g"});
    })
    .catch( err => {
        next(new Error(err));
    });
};


exports.post = (req, res, next) => {
  let body = req.body;

  let newPost = new Post(body);

  newPost.save()
  .then( post => {
      res.json(post);
  })
  .catch( err => {
      next(new Error(err));
  });

};

exports.get = (req, res, next) => {
    res.json({});
};

exports.put = (req, res, next) => {
    res.json({});
};

exports.delete = (req, res, next) => {
    res.json({});
};
