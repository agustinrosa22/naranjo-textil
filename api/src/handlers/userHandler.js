const { createUser } = require('../controllers/usersControllers')

const createUserHandler = async (req, res) => {
    const { username, password, tipo } = req.body; // Obtén los datos del cuerpo de la solicitud
  
    try {
      // Intenta crear un nuevo usuario
      const newUser = await createUser({ username, password, tipo });
  
      // Si el usuario se crea exitosamente, devuelve una respuesta con el usuario creado
      return res.status(201).json(newUser);
    } catch (error) {
      // Si ocurre un error durante la creación del usuario, devuelve una respuesta de error
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  };
  
  module.exports = { createUserHandler };