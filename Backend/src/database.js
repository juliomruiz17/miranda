const mongoose = require("mongoose");


mongoose.set('useFindAndModify', false)

mongoose.connect("mongodb+srv://1234:1234@cluster0.ghuyi.mongodb.net/Productn?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then((db) => console.log("Banco de Dados connection"))
  .catch((err) => console.error(err));

module.exports = mongoose;
