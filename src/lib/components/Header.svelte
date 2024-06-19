<script>
	import Menu from "lucide-svelte/icons/menu";
	import Button from "./ui/button/button.svelte";
	import Search  from "lucide-svelte/icons/search";

</script>
<div class="navbar bg-base-100 mb-40 shadow-xl rounded-box">
	<div class="navbar-start">

		<Button variant="ghost" size="circle">
			<Menu />
		</Button>
	</div>
	<div class="navbar-center">
		<!-- <a class="btn btn-ghost text-xl">daisyUI</a> -->
	</div>
	<div class="navbar-end">
		 <Button variant="ghost" size="circle">
			<Search />
		</Button>
	</div>
</div>
