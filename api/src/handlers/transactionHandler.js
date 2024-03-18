const { sellProduct } = require('../controllers/transactionController');

const sellProductHandler = async (req, res, next) => {
  try {
    await sellProduct(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sellProductHandler,
};
