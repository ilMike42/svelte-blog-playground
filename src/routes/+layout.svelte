<script>
	import '../app.css';

	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header class="px-12 mt-4"></Header>
	<slot />
	<Footer class="mt-auto w-full bg-red-300"> 
		<span class="text-black">Footer</span>	 
	</Footer>
</div>
