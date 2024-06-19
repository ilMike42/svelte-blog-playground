<script lang="ts">
	import Menu from 'lucide-svelte/icons/menu';
	import Button from '../ui/button/button.svelte';
	import Search from 'lucide-svelte/icons/search';

	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLInputAttributes;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div class={cn('navbar bg-base-100 mb-40 shadow-xl rounded-box', className)}>
	<div class="navbar-start">
		<Button variant="ghost" size="circle">
			<Menu />
		</Button>
	</div>
	<div class="navbar-center">
		 <Button class="text-xl" variant="ghost" href="/">Blog</Button>
	</div>
	<div class="navbar-end">
		<Button variant="ghost" size="circle">
			<Search />
		</Button>
	</div>
</div>
