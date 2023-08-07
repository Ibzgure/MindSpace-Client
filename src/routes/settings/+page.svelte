<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import Input from '$lib/components/ui/input/Input.svelte';
	import { auth, firestore } from '$lib/utils/firebase';
	import { collectionStore, docStore, userStore } from 'sveltefire';
	import { saveProfile } from '$lib/api/user';
	import { doc, getDoc } from 'firebase/firestore';

	const user = userStore(auth);

	$: photoURL = $user?.photoURL;
	$: displayName = $user?.displayName;
	$: email = $user?.email;
	$: uid = $user?.uid;

	let profile = {
		username: '',
		about: '',
	};

	// update the form object data if the user has a profile
	$: {
		if (uid) {
			(async () => {
				const _ = await getDoc(doc(firestore, `profiles/${uid}`));
				if (_.exists()) {
					// @ts-ignore
					profile = { ..._.data() };
				}
				console.log(_.data());
			})();
		}
	}

	async function handleSave() {
		await saveProfile(profile);
	}
</script>

<div class="flex flex-col w-full overflow-auto">
	<div class="flex flex-col p-4 gap-8 w-full max-w-[768px] mx-auto mt-20">
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

		<!-- MindSpace account details (for display) -->
		<h2 class="text-2xl font-bold">MindSpace account</h2>
		<div class="grid gap-2">
			<Input placeholder="Username" bind:value={profile.username} />
			<Input placeholder="About" bind:value={profile.about} />
			<Button on:click={handleSave}>Save profile</Button>
		</div>
		<hr />

		<!-- Login details -->
		<div class="grid gap-2">
			<Button variant="destructive" on:click={() => auth.signOut()}>
				<iconify-icon icon="svg-spinners:full" />
				Log out
			</Button>
		</div>
	</div>
</div>
