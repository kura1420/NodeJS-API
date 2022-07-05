const crudController = require('../controller/CrudController');

module.exports = {
    path: '/crud',
    config: (router) => {
        router
            .get('/', crudController.index)
            .post('/', crudController.store)
            .get('/:id', crudController.show)
            .put('/:id', crudController.put)
            .delete('/:id', crudController.destroy)

        return router;
    }
}