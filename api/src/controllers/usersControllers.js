const {User} = require('../db')
const sequelize = require('sequelize');
require('dotenv').config()

const createUser = async ({
    username,
    password,
    tipo

  }) => {
  const created = await User.create({
    username,
    password,
    tipo

  })
  return created
  }

  module.exports = {
    createUser
  };