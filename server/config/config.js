/* =========
Puerto
========= */

process.env.PORT = process.env.PORT || 3000;

/* =========
Entorno
========= */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* ====================
BASE DE DATOS
======================= */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/projects';
} else {
    urlDB = process.env.MONDODB_URI;
}

process.env.URLDB = urlDB;