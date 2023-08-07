<script>
	import '../app.postcss';
	import 'iconify-icon';

	import { auth, firestore } from '$lib/utils/firebase';
	import { FirebaseApp, userStore } from 'sveltefire';
	import Auth from '$lib/components/Auth.svelte';
	import MainNavbar from './MainNavbar.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { page } from '$app/stores';

	const user = userStore(auth);
</script>

<main class="h-screen">
	{#if $user}
		<div class="h-full flex overflow-hidden">
			<MainNavbar class="min-w-fit" />
			<slot class="w-full flex-1" />
		</div>
	{:else}
		<Auth />
	{/if}
</main>
