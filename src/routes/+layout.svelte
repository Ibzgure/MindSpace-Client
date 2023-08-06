<script>
	import '../app.postcss';
	import { auth, firestore } from '$lib/utils/firebase';
	import { FirebaseApp, userStore } from 'sveltefire';
	import Auth from '$lib/components/Auth.svelte';

	const user = userStore(auth);
</script>

<main>
	{#if $user}
		<slot />
	{:else}
		<Auth />
	{/if}
</main>
