<script lang="ts">
	import { profilesDocs } from '$lib/utils/firebase';
	import { page } from '$app/stores';

	$: profile_uid = $page.params.profile_uid;
</script>

<div class="flex flex-col">
	<div class="p-4">
		<h1 class="text-xl font-bold">Peers</h1>
	</div>

	<div class="flex-1 flex flex-col overflow-auto h-full w-full ">
		{#each $profilesDocs as profile}
			<a
				href="/peers/{profile?.id}"
				class="flex items-center gap-4 p-4 border-black/10 border-b-[1px] last:border-none 
					{profile_uid == profile?.id ? 'text-primary' : ''}
				"
			>
				<div class="w-full flex flex-col gap-1 ">
					<span class="font-semibold">{profile?.username} </span>
				</div>
				<iconify-icon icon="solar:alt-arrow-right-linear" />
			</a>
		{/each}
	</div>
</div>
