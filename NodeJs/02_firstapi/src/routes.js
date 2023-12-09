const UserController = require("../controllers/UserController");

module.exports = [ // Array de rotas
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoint: '/products',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoint: '/items',
        method: 'GET',
        handler: UserController.listUsers,
    },
];