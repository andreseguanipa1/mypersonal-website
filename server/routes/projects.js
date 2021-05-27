const express = require('express');

const Projects = require('../models/projects');

const app = express();


/* app.post('/projects', (req, res) => {

    let projects = new Projects({
        name: "Project Unmoored",
        description: "A simple website, made for an organization against sexual abuse. It was developed using HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Handlebars and Socket.IO",
        linkgitfront: "github.com/andreseguanipa1/projectunmoored",
        linkgit: "https://github.com/andreseguanipa1/projectunmoored",
        linkherokufront: "projectunmoored.herokuapp.com",
        linkheroku: "https://projectunmoored.herokuapp.com/",
        web: 'A'
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

}); */


app.get('/projects', (req,res) => {

    Projects.find({})
        .sort('web')
        .exec((err, proyectoDB) => {

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