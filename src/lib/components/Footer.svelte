<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLInputAttributes;

	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div class={cn(className)}>
    <slot />
</div>
