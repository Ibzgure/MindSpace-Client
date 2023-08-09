<script>
	import { articles, getAllArticles } from '$lib/api/cms';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	const initArticles = async () => {
		if ($articles.length > 0) return $articles;
		else {
			return await getAllArticles();
		}
	};
</script>

<div class="p-4 w-full">
	{#await initArticles()}
		Loading articles
	{:then data}
		<div
			class="w-full grid gap-4"
			style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));"
		>
			{#each data as article}
				<!-- Article card -->
				<a
					href="/articles/{article._id}"
					class="flex gap-4 p-4 border rounded-md cursor-pointer transition-all hover:bg-primary/10 hover:border-primary"
				>
					<img src={article.image_url} alt="image of {article.title}" class="h-[100px] w-[100px]" />
					<div class="w-full grid gap-2">
						<p class="font-bold">{article.title}</p>
						<p class="text-gray-600 text-sm">{article.description}</p>
						<div class="w-full flex gap-2 justify-between items-center">
							<p class="text-gray-400 text-sm">{dayjs(article._createdAt).from(dayjs())}</p>
							<iconify-icon icon="solar:alt-arrow-right-linear" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/await}
</div>
