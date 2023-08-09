<script>
	import '../app.postcss';
	import 'iconify-icon';

	import { user } from '$lib/utils/firebase';
	import Auth from '$lib/components/Auth.svelte';
</script>

<main class="h-screen">
	{#if $user}
		<slot />
	{:else}
		<Auth />
	{/if}
</main>
