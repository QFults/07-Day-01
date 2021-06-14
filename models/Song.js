const orm = require('./orm.js')

const Song = {
  async getSongs () {
    const songs = await orm.findAll('songs')
    return songs
  },
  async getSong (where) {
    const songs = await typeof where === 'number' ? orm.findById('songs', where) : orm.findWhere('songs', where)
    return songs
  },
  async addSong (song) {
    const newSong = await orm.create('songs', song)
    return newSong
  },
  async updateSong (id, updates) {
    const response = await orm.findByIdAndUpdate('songs', id, updates)
    return response
  },
  async deleteSong (id) {
    const response = await orm.findByIdAndDelete('songs', id)
    return response
  }
}

module.exports = Song
