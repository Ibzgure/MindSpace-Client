<script>
	import { page } from '$app/stores';
	import Editor from '$lib/components/messages/Editor.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { firestore, user } from '$lib/utils/firebase';
	import { collection, query, where } from 'firebase/firestore';
	import { Collection, collectionStore } from 'sveltefire';

	const peer_uid = $page.params.profile_uid;
	const user_uid = $user?.uid;

	const dmQuery = query(
		collection(firestore, 'direct-messages'),
		where('sender_id', 'in', [peer_uid, user_uid]),
		where('receiver_id', 'in', [peer_uid, user_uid]),
	);
	const directMessages = collectionStore(firestore, dmQuery);

	let currentMessage = '';

	async function handleSend() {}
</script>

<div class="h-full justify-between flex flex-col over-hidden ">
	<div class="h-full overflow-auto flex-1 border-l-1 border-black/20">
		<!-- messages -->
		<pre class="overflow-auto">
			{JSON.stringify($directMessages, null, 2)}
		</pre>
	</div>
	<div class="flex p-4 gap-4 border-t-[1px]">
		<Editor bind:value={currentMessage} />
		<Button on:click={handleSend}>Send</Button>
	</div>
</div>
