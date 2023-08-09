<script>
	import AllPeers from './components/AllPeers.svelte';
</script>

<div class="w-full flex">
	<AllPeers />
	{#if $$slots}
		<div class="flex-1 h-full border-l-[1px] border-l-black/10">
			<slot class="" />
		</div>
	{/if}
</div>
