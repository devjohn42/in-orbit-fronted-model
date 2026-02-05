import { GithubLogo } from '../assets/github-logo'
import logo from '../assets/in-orbit-logo.svg'
import { Button } from '../components/ui/button'

export function SingInWithGithub() {
	const githubUrl = new URL('https://github.com/login/oauth/authorize')
	githubUrl.searchParams.set('client_id', 'Ov23li8cfIpCHEsG0HmG')

	return (
		<main className="h-screen flex flex-col items-center justify-center gap-8">
			<img src={logo} alt="in.orbit" />

			<p className="text-zinc-300 leading-relaxed max-w-80 text-center">
				Conclua suas metas semanais, ganhe experiência e suba de nível
			</p>

			<Button
				className="bg-white text-black hover:bg-white hover:opacity-60 duration-300"
				asChild
			>
				<a href={githubUrl.toString()}>
					<GithubLogo />
					Entrar com Github
				</a>
			</Button>
		</main>
	)
}
