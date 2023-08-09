<script>
	import { page } from '$app/stores';
	import { firestore } from '$lib/utils/firebase';
	import { collection, query, where } from 'firebase/firestore';
	import { collectionStore } from 'sveltefire';

	const peer_uid = $page.params.profile_uid;

	const dmQuery = query(
		collection(firestore, 'direct-messages'),
		where('receiver', 'in', [peer_uid]),
		where('sender', 'in', [peer_uid]),
	);
	const directMessages = collectionStore(firestore, dmQuery);
</script>

<div class="flex-1 border-l-1 border-black/20">
	this is my profile {peer_uid}
</div>
<pre>
    {JSON.stringify($directMessages, null, 2)}
</pre>
