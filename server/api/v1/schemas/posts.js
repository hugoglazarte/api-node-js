"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    categories: [{
        // de tipo array para almacenar varias categorias
        type: Schema.Types.ObjectId,
        ref: "category"
    }]
}, {
    timestamps: true
});

/* Payload (modelo de envio de datos) para cargar post.
{
  "title": "Node JS News",
  "description": "Updated everyday",
  "author": "58f6c3f5fae92a193420b0c9",
  "categories": ["58f8208f17466c3a30af9823", "5900c74f9d658bf8cc2b972d"]
}

*/

module.exports = mongoose.model("posts", UserSchema);
