<script lang="ts">
	import { fade, type EasingFunction } from 'svelte/transition';

	export let key: string;
	export let duration = 300;

	type Params = {
		delay?: number;
		duration?: number;
		easing?: EasingFunction;
	};
	type Options = {
		direction?: 'in' | 'out' | 'both';
	};
</script>

{#key key}
	<div in:fade={{ duration }} out:fade={{ duration }} class="w-full">
		<slot />
	</div>
{/key}
