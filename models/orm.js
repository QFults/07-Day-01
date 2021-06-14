const db = require('../db')

const orm = {
  async findAll (table) {
    const response = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${table}`, (err, data) => {
        if (err) { reject(err) }
        resolve(data)
      })
    })
    return response
  },
  async findById (table, id) {
    const response = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${table} WHERE ?`, { id }, (err, data) => {
        if (err) { reject(err) }
        resolve(data[0])
      })
    })
    return response
  },
  async findWhere (table, where) {
    const response = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${table} WHERE ?`, where, (err, data) => {
        if (err) { reject(err) }
        resolve(data)
      })
    })
    return response
  },
  async create (table, data) {
    const response = await new Promise((resolve, reject) => {
      db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
        if (err) { reject(err) }
        db.query(`SELECT * FROM ${table} WHERE ?`, { id: fields.insertId }, (err, newData) => {
          if (err) { reject(err) }
          resolve(newData[0])
        })
      })
    })
    return response
  },
  async findByIdAndUpdate (table, id, updates) {
    const response = await new Promise((resolve, reject) => {
      db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, { id }], err => {
        if (err) { reject(err) }
        resolve()
      })
    })
    return response
  },
  async findByIdAndDelete (table, id) {
    const response = await new Promise((resolve, reject) => {
      db.query(`DELETE FROM ${table} WHERE ?`, { id }, err => {
        if (err) { reject(err) }
        resolve()
      })
    })
    return response
  }
}
