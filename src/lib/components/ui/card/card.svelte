<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { type Events, type Props, cardVariants } from "./index.js";
	import { cn } from "$lib/utils.js";

	type $$Props = Props;

	let className: $$Props["class"] = undefined;
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export let builders: $$Props["builders"] = [];
	export { className as class };
</script>

<!-- TODO: add card-compact, width, bg and others as variant/sizing/props -->
<div
	class={cn(cardVariants({ variant, size, className }), "bg-base-100 shadow-xl")}
	{...$$restProps}
>
	<slot />
</div>
