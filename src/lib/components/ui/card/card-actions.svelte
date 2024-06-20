<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<!-- TODO: add variants like justify end? -->
<div class={cn("card-actions", className)} {...$$restProps}>
	<slot />
</div>
