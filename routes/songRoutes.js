const router = require('express').Router()
const {
  Song: {
    getSongs,
    getSong,
    addSong,
    updateSong,
    deleteSong
  }
} = require('../models')

router.get('/songs', (req, res) => getSongs()
  .then(songs => res.json(songs))
  .catch(err => console.log(err)))

router.get('/songs/:id', (req, res) => getSong(req.params.id)
  .then(song => res.json(song))
  .catch(err => console.log(err)))

router.post('/songs', (req, res) => addSong(req.body)
  .then(song => res.json(song))
  .catch(err => console.log(err)))

router.put('/songs/:id', (req, res) => updateSong(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

router.delete('/songs/:id', (req, res) => deleteSong(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
