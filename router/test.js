const testController = require('../controller/test')

module.exports = {
    path: "/test",
    config: (router) => {
        router
            .get("/", testController.index)
			
        return router;
    },
}
