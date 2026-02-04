import { defineConfig } from 'orval'

export default defineConfig({
	api: {
		input: '../in-orbit-backend-model/swagger.json',
		output: {
			baseUrl: 'http://localhost:3333',
			target: './src/http/generated/api.ts',
			client: 'react-query',
			clean: true
		}
	}
})
