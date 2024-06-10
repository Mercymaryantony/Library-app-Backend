const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":String,
        "aut":String,
        "pyr":String,
        "price":String
      }
)
let librarymodel = mongoose.model("library",schema)
module.export={librarymodel}