const express = require('express');

const Projects = require('../models/projects');

const app = express();


/* app.post('/projects', (req, res) => {

    let projects = new Projects({
        name: 'Live Chat',
        description: 'Live chat using Socket.io, people will be able to talk in differents chat rooms with their family, friends, classmates, etc.',
        linkgitfront: "github.com/andreseguanipa1/node-chat",
        linkgit: "https://github.com/andreseguanipa1/node-chat",
        linkherokufront: "my-web-chat-andres.herokuapp.com",
        linkheroku: "https://my-web-chat-andres.herokuapp.com/"

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