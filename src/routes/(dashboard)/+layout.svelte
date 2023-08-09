<script>
	import { auth } from '$lib/utils/firebase';
	import MainNavbar from './MainNavbar.svelte';
</script>

<main class="h-screen">
	<div class="h-full flex overflow-hidden">
		<MainNavbar class="min-w-fit" />
		<slot class="w-full flex-1" />
	</div>
</main>
