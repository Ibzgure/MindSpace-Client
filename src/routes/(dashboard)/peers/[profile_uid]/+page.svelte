<script lang="ts">
	import { page } from '$app/stores';
	import { sendDirectMessage } from '$lib/api/messaging';
	import Editor from '$lib/components/messages/Editor.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { user } from '$lib/utils/firebase';
	import Messages from './Messages.svelte';

	$: peer_uid = $page.params.profile_uid;
	$: user_uid = $user?.uid;

	let currentMessage = '';

	async function handleSend() {
		try {
			await sendDirectMessage({
				receiver_id: peer_uid,
				content: currentMessage,
			});
			currentMessage = '';
		} catch (e) {
			alert(e);
		}
	}
</script>

<div class="h-full justify-between flex flex-col over-hidden">
	<div class="h-full overflow-auto flex-1 border-l-1 border-black/20">
		<!-- messages -->
		{#key peer_uid}
			{#if user_uid}
				<Messages {peer_uid} {user_uid} />
			{/if}
		{/key}
	</div>
	<div class="flex p-4 gap-4 border-t-[1px]">
		<Editor bind:value={currentMessage} />
		<Button on:click={handleSend} class="bg-Secondary">Send</Button>
	</div>
</div>
