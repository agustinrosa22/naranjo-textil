const { createUser,
getAllUser } = require('../controllers/usersControllers')

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

  const getAllUsersHandler = async (req, res) => {
    try {
      // Llama al controlador para obtener todos los productos
      const allUsers = await getAllUser();
  
      // Responde con la lista de productos
      res.status(200).json({
        success: true,
        message: 'Usuarios obtenidos exitosamente',
        data: allUsers,
      });
    } catch (error) {
      // Maneja errores y responde con un mensaje de error
      console.error('Error al obtener todos los usuarios:', error.message);
      res.status(500).json({
        success: false,
        message: 'Error al obtener todos los usuarios',
      });
    }
  };
  
  module.exports = { createUserHandler,
    getAllUsersHandler,
   };