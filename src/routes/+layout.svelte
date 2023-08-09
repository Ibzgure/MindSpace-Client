<script>
	import '../app.postcss';
	import 'iconify-icon';

	import { firestore, auth } from '$lib/utils/firebase';
	import Auth from '$lib/components/Auth.svelte';
	import { FirebaseApp, SignedIn, SignedOut } from 'sveltefire';
</script>

<FirebaseApp {firestore} {auth}>
	<main class="h-screen">
		<SignedIn>
			<slot />
		</SignedIn>
		<SignedOut>
			<Auth />
		</SignedOut>
	</main>
</FirebaseApp>
