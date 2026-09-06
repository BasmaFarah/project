const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
content:String,
title:String,
user:{
type:mongoose.Schema.Types.ObjectId,
ref:"user"
}
    });
    const note = mongoose.model("note",noteSchema);
    module.exports = note;