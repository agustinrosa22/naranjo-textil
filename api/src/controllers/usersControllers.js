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


  const getAllUser = async () =>{
    const databaseProduct = await User.findAll();

    return databaseProduct
  }

  const loginController = {
    async login(req, res) {
      try {
        const { username, password } = req.body;
  
        // Verifica si el usuario es admin
        if (username === 'admin' && password === 'A1s2d3f4') {
          const user = {
            id: 1,
            username: 'admin',
            tipo: 'Admin',
            createdAt: '2024-03-15T21:11:17.130Z',
            updatedAt: '2024-03-15T21:11:17.130Z'
          };
          return res.status(200).json({ access: true, user });
        }
  
        // Verifica si el usuario es vendedor
        if (username === 'Vendedor' && password === 'Vendedor') {
          const user = {
            id: 2,
            username: 'Vendedor',
            tipo: 'Vendedor',
            createdAt: '2024-03-15T21:52:09.507Z',
            updatedAt: '2024-03-15T21:52:09.507Z'
          };
          return res.status(200).json({ access: true, user });
        }
  
        // Si el usuario no es admin ni vendedor, devuelve credenciales inválidas
        return res.status(401).json({ message: 'Credenciales inválidas' });
      } catch (error) {
        console.error('Error en el controlador de login:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
  };
  



  module.exports = {
    createUser,
    getAllUser,
    loginController
  };