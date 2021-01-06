"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TodoSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
});
exports["default"] = mongoose_1.model("Todo_collections", TodoSchema);
//const ToDo= model("TodoModel",TodoSchema)
//module.exports=ToDo
