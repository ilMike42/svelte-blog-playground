<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="mx-12">
	<article class="prose">
		<h1>Buttons</h1>
        <div class="flex gap-5">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="neutral">Neutral</Button>
        </div>
	</article>
</div>
