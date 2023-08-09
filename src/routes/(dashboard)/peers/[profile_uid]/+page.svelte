<script lang="ts">
	import { page } from '$app/stores';
	import { sendDirectMessage } from '$lib/api/messaging';
	import Editor from '$lib/components/messages/Editor.svelte';
	import Message from '$lib/components/messages/Message.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { firestore, user } from '$lib/utils/firebase';
	import { collection, query, where, onSnapshot } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import { Collection, FirebaseApp, collectionStore } from 'sveltefire';

	$: peer_uid = $page.params.profile_uid;
	$: user_uid = $user?.uid;

	let messages: any[] = [];

	$: {
		if (user_uid !== null && user_uid !== undefined) {
			const dmQuery = query(
				collection(firestore, 'direct-messages'),
				where('sender_id', 'in', [peer_uid, user_uid]),
				where('receiver_id', 'in', [peer_uid, user_uid]),
			);

			const unsubscribe = onSnapshot(dmQuery, (snapshot: any) => {
				messages = snapshot.docs
					.map((doc: any) => doc.data())
					.filter((e) => {
						// take care of the self message call case
						if (e.sender_id !== e.receiver_id) {
							return true;
						}
						if (e.sender_id === peer_uid) {
							return true;
						}
					});
			});
			onDestroy(unsubscribe);
		}
	}

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

{#key peer_uid}
	<div class="h-full justify-between flex flex-col over-hidden ">
		<div class="h-full overflow-auto flex-1 border-l-1 border-black/20">
			<!-- messages -->
			<div class="p-4 flex flex-col flex-1 gap-2">
				{#each messages as message}
					<Message {message} />
				{/each}
			</div>
		</div>
		<div class="flex p-4 gap-4 border-t-[1px]">
			<Editor bind:value={currentMessage} />
			<Button on:click={handleSend} class="bg-Secondary">Send</Button>
		</div>
	</div>
{/key}
