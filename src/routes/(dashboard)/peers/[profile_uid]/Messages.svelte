<script lang="ts">
	import { page } from '$app/stores';
	import { sendDirectMessage } from '$lib/api/messaging';
	import Editor from '$lib/components/messages/Editor.svelte';
	import Message from '$lib/components/messages/Message.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { firestore, user } from '$lib/utils/firebase';
	import dayjs from 'dayjs';
	import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
	import { onDestroy, onMount } from 'svelte';
	import { Collection, FirebaseApp, collectionStore } from 'sveltefire';

	export let peer_uid: string;
	export let user_uid: string;

	const dmQuery = query(
		collection(firestore, 'direct-messages'),
		where('sender_id', 'in', [peer_uid, user_uid]),
		where('receiver_id', 'in', [peer_uid, user_uid]),
	);

	const directMessages = collectionStore(firestore, dmQuery);
	$: sortedMessages = $directMessages.sort((a: any, b: any) => {
		return dayjs(a.timestamp.toDate()).diff(b.timestamp.toDate());
	});

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

	// scrolling
	let messagesScrollContainer: any;

	$: {
		if (directMessages && messagesScrollContainer) {
			messagesScrollContainer.scrollTop = messagesScrollContainer.scrollHeight;
			console.log('yipe');
		}
	}
</script>

<div class="p-4 flex flex-col flex-1 gap-2" bind:this={messagesScrollContainer}>
	{#each sortedMessages as message}
		<Message {message} />
	{/each}
</div>
