import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { OutlineButton } from './ui/outline-button'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

export function Summary() {
	return (
		<section className="py-10 max-w-120 px-5 mx-auto flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<InOrbitIcon />
					<span className="text-lg font-semibold">5 a 10 de Janeiro</span>
				</div>
				<DialogTrigger asChild>
					<Button size="sm">
						<Plus className="size-4" />
						Cadastrar meta
					</Button>
				</DialogTrigger>
			</div>

			<div className="flex flex-col gap-3">
				<Progress max={16} value={12}>
					<ProgressIndicator style={{ width: '75%' }} />
				</Progress>

				<div className="flex items-center justify-between text-xs text-zinc-400">
					<span>
						Você completou <span className="text-zinc-100">12</span> de{' '}
						<span className="text-zinc-100">19</span> metas nessa semana.
					</span>
					<span>75%</span>
				</div>

				<Separator />

				<div className="flex flex-wrap gap-3">
					<OutlineButton>
						<Plus className="size-4 text-zinc-600" />
						Programar
					</OutlineButton>

					<OutlineButton>
						<Plus className="size-4 text-zinc-600" />
						Meditar
					</OutlineButton>

					<OutlineButton>
						<Plus className="size-4 text-zinc-600" />
						Ler um livro
					</OutlineButton>
				</div>

				<div className="flex flex-col gap-6">
					<h2 className="text-xl font-medium">Sua semana</h2>

					<div className="flex flex-col gap-4">
						<h3>
							Domingo <span className="text-zinc-400 text-xs">(4 de Janeiro)</span>
						</h3>

						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100">"Programar"</span> às{' '}
									<span className="text-zinc-100"> 19:00</span>
								</span>
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100"> "Metidar" </span> às
									<span className="text-zinc-100"> 09:00</span>
								</span>
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100">"Ler um livro"</span> às
									<span className="text-zinc-100"> 00:30</span>
								</span>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3>
							Terça <span className="text-zinc-400 text-xs">(6 de Janeiro)</span>
						</h3>

						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100">"Programar"</span> às{' '}
									<span className="text-zinc-100"> 19:00</span>
								</span>
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100">"Ler um livro"</span> às
									<span className="text-zinc-100"> 00:30</span>
								</span>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3>
							Sexta-Feira <span className="text-zinc-400 text-xs">(9 de Janeiro)</span>
						</h3>

						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100"> "Metidar" </span> às
									<span className="text-zinc-100"> 09:00</span>
								</span>
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-pink-500" />
								<span className="text-sm text-zinc-400">
									Você completou <span className="text-zinc-100">"Ler um livro"</span> às
									<span className="text-zinc-100"> 00:30</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
