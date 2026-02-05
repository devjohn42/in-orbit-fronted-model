import { createBrowserRouter } from 'react-router-dom'
import { Application } from './pages/application'
import { SingInWithGithub } from './pages/sing-in-with-github'
import { SingInWithGithubCallBack } from './pages/sing-in-with-github-callback'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <SingInWithGithub />
	},
	{
		path: '/app',
		element: <Application />
	},
	{
		path: '/auth/github/callback',
		element: <SingInWithGithubCallBack />
	}
])
