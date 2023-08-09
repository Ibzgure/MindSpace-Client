<script>
	import '../app.postcss';
	import 'iconify-icon';

	import { auth } from '$lib/utils/firebase';
	import { userStore } from 'sveltefire';
	import Auth from '$lib/components/Auth.svelte';

	const user = userStore(auth);
</script>

<main class="h-screen">
	{#if $user}
		<slot />
	{:else}
		<Auth />
	{/if}
</main>
