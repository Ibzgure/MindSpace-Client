<script lang="ts">
	import { user, profilesDocs } from '$lib/utils/firebase';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let message: any = null;

	$: mine = message?.sender_id === $user?.uid;
	$: sender = $profilesDocs.find((e) => e?.id === message?.sender_id) ?? null;
</script>

<div
	class="p-3 flex flex-col gap-2  max-w-md rounded-2xl shadow-lg {mine
		? 'self-end text-right bg-Secondary text-white rounded-br-none'
		: 'self-start text-left bg-white outline-1 outline-dashed outline-black/20 rounded-tl-none'}"
>
	<p>
		{message?.content}
	</p>
	<div class="flex gap-4 {mine ? 'flex-row-reverse' : ''}">
		<span class="text-sm text-black/50"> @{sender?.username}</span>
		<span class="text-sm text-black/50"> {dayjs(message?.timestamp.toDate()).fromNow()}</span>
	</div>
</div>
