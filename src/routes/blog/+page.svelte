<script lang="ts">
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import BlogCard from '$lib/components/portfolio/BlogCard.svelte';
	import { DATA } from '$lib/data/resume';

	let BLUR_FADE_DELAY = 0.04;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<BlurFade delay={BLUR_FADE_DELAY}>
	<h1 class="mb-8 text-2xl font-medium tracking-tighter">Tout les Posts</h1>
</BlurFade>
<!-- Posts -->
<section class="post">
	<div>
		{#each DATA.posts as blog, id}
			<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
				<BlogCard 
					title={blog.title}
					date={blog.date}
					description={blog.content}
					lien={blog.lien}
					auteur={blog.auteur}
					role={blog.role}
					pdp={blog.pdp}
				/>
			</BlurFade>
		{/each}
	</div>
</section>

<style>
	.posts {
		display: grid;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}
</style>
