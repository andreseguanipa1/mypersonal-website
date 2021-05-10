const express = require('express');

const Projects = require('../models/projects');

const app = express();


app.post('/projects', (req, res) => {

    let projects = new Projects({
        name: 'Stock System',
        description: 'Develop a system that allows you to control the inventory of a company; using Visual Basic and MySQL.',
        linkgitfront: "github.com/andreseguanipa1/visual-basic-inventario",
        linkgit: "https://github.com/andreseguanipa1/visual-basic-inventario",
        linkherokufront: null,
        linkheroku: null

    });

    projects.save((err, projectsDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        if (!projectsDB) {
            return res.status(404).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            projects: projectsDB
        })
    })

});


app.get('/projects', (req,res) => {

    Projects.find((err, proyectoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.send(proyectoDB);

    });

});


module.exports = app;