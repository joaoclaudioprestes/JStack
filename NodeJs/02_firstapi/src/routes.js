const UserController = require("../controllers/UserController");

module.exports = [ // Array de rotas
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoint: '/users:id',
        method: 'GET',
        handler: UserController.getUsersById,
    }
];