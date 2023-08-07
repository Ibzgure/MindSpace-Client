<script>
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { auth } from '$lib/utils/firebase';
	import { userStore } from 'sveltefire';

	const user = userStore(auth);

	$: photoURL = $user?.photoURL;
	$: displayName = $user?.displayName;
	$: email = $user?.email;
	$: uid = $user?.uid;
</script>

<div class="flex flex-col w-full overflow-auto">
	<div class="flex flex-col p-4 gap-8">
		<h2 class="text-2xl font-bold">Auth details</h2>

		<!-- User details and avatar from Firebase auth -->
		<div class="flex gap-4">
			<img src={photoURL} alt="" class="h-[4rem] w-[4rem] rounded-full" />
			<flex class="flex-col gap2">
				<p class="text-md font-medium">{displayName}</p>
				<p class="text-md text-gray-500">{email}</p>
				<p class="text-md text-gray-500">UID: {uid}</p>
			</flex>
		</div>
		<hr />

		<!-- Minspace account details (for display) -->
		<h2 class="text-2xl font-bold">MindSpace account</h2>
		<UnderConstruction name="mindspace account details" />
		<hr />

		<!-- Login details -->
		<h2 class="text-2xl font-bold">Login stuff</h2>
		<Button variant="destructive" on:click={() => auth.signOut()}>Log out</Button>
	</div>
</div>
