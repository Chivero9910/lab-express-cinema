const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((response) => {
        res.render("movies.hbs", {
            allMovies: response
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/movies/:movieId', (req, res, next) => {
    Movies.findById(req.params.movieId)
        .then((response) => {
            console.log(response)
            res.render('one-movie', {
                movieOnly: response
            })
        })
        .catch(err => console.log(err));
});

module.exports = router;
