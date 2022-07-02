const testController = require('../controller/TestController')

module.exports = {
    path: "/test",
    config: (router) => {
        router
            .get('/', testController.index)
            .post('/', testController.store)
            .get('/:id', testController.show)
            .put('/:id', testController.put)
            .delete('/:id', testController.delete)
			
        return router;
    },
}
