<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardActions from '$lib/components/ui/card/card-actions.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<div class="py-10 bg-primary/15 w-full h-full">
	<div class="mx-12">
		<article class="prose">
			<h1>Buttons</h1>
			<div class="flex flex-wrap gap-5 not-prose">
				<Button>Default</Button>
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="accent">Accent</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
				<Button variant="neutral">Neutral</Button>
			</div>
			<!--		TODO: remove these <br>		-->
			<br />
			<br />
			<h1>Card</h1>
			<div class="flex gap-5 not-prose">
				<Card>
					<figure><img
						src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
						alt="Shoes" />
					</figure>
					<CardContent>
						<CardTitle>Card title</CardTitle>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<CardActions class="justify-end">
							<Button variant="primary">Buy now</Button>
						</CardActions>
					</CardContent>
				</Card>
			</div>


			<!--		TODO: remove these <br>		-->
			<br />
			<br />
			<h1>Input</h1>
			<div class="flex flex-col gap-5">

				<h4>Simple text component</h4>
				<Input placeholder="placeholder"></Input>

				<!--<h4>Text input</h4>
				<input type="text" placeholder="Type here" class="input w-full max-w-xs" />

				<h4>Text input with border</h4>
				<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />


				<h4>Text input with border</h4>
				<label class="input input-bordered flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
						<path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
					</svg>
					<input type="text" class="grow" placeholder="Email" />
				</label>

				<h4>Text input with text label inside</h4>
				<label class="input input-bordered flex items-center gap-2">
					Name
					<input type="text" class="grow" placeholder="Daisy" />
				</label>

				<h4>Ghost (no background)</h4>
				<input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" />


				<h4>With form-control and labels</h4>
				<label class="form-control w-full max-w-xs">
					<div class="label">
						<span class="label-text">What is your name?</span>
						<span class="label-text-alt">Top Right label</span>
					</div>
					<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
					<div class="label">
						<span class="label-text-alt">Bottom Left label</span>
						<span class="label-text-alt">Bottom Right label</span>
					</div>
				</label>

				<h4> Primary color </h4>
				<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />


				<h4> Sizes </h4>
				<h5>xs</h5>
				<input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />

				<h5>sm</h5>
				<input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

				<h5>md</h5>
				<input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" />

				<h5>lg</h5>
				<input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />-->
			</div>
		</article>
	</div>
</div>