module.exports = {
	port:8081,
	db: {
		databse: process.env.DB_NAME || 'firstvuejs',
		user: process.env.DB_USER || 'firstvuejs',
		password: process.env.DB_PASS || 'firstvuejs',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'locahost',
			storage: './firstvuejs.sqlite'
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}
