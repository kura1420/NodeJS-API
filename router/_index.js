module.exports = {
    path: "/",
    config: (router) => {
        router
			.get('/', (req, res) => {
				res
					.status(200)
					.json('SKP NU - BSI')
			})
		
        return router;
    },
};