require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const path = require('path');

const app = express();

app.use(require('./routes/projects'));

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

//Conexión con la base de datos
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ process.env.PORT}`);
});