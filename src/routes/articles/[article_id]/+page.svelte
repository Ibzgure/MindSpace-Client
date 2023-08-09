<script>
	import { getArticle } from '$lib/api/cms';
	import { page } from '$app/stores';

	import { PortableText } from '@portabletext/svelte';

	const { article_id } = $page.params;
</script>

<main class="h-screen relative overflow-auto">
	{#await getArticle(article_id)}
		<div class="h-[80px] sticky top-0 bg-Secondary flex items-center p-4">
			<div class="bg-white/80 h-[1rem] w-[40%] rounded-full" />
		</div>
		<div class="flex flex-col">
			<!-- Image -->
			<div class="flex-1 bg-Tertiary1/25 aspect-video" />
			<!-- Content -->
			<div class="flex-1 m-4 bg-black/20 aspect-video" />
			<div class="flex-1 m-4 bg-black/20 aspect-video" />
		</div>
	{:then article}
		<div class="min-h-[80px] sticky top-0 bg-Tertiary1 flex items-center p-4">
			<h3 class="text-white font-bold text-2xl">{article.title}</h3>
		</div>
		<div class="flex flex-col max-w-screen-lg mx-auto">
			<!-- Image -->
			<div class="flex-1 bg-Tertiary1/25 aspect-video overflow-hidden">
				<img src={article.image_url} alt="" class="object-cover max-h-full w-full" />
			</div>
			<!-- Content -->
			<div class="p-4">
				<PortableText value={article.content} />
			</div>
		</div>
	{:catch e}
		<div class="p-4 flex justify-between items-center">
			<h3 class="text-3xl">404</h3>
		</div>
	{/await}
</main>
