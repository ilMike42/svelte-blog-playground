<script>
	import '../app.css';

	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header class="sticky top-0"></Header>
	<slot />
	<Footer class="mt-auto w-full bg-red-300">
		<span class="text-black">Footer</span>
	</Footer>
</div>
