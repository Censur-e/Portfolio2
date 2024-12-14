<script lang="ts">
	import { formatDate } from '$lib/utils';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import { DATA } from '$lib/data/resume';

	export let data;
	let BLUR_FADE_DELAY = 0.04;
	
</script>

<svelte:head>
	<title>Projets</title>
</svelte:head>

<BlurFade delay={BLUR_FADE_DELAY}>
	<h1 class="mb-8 text-2xl font-medium tracking-tighter">Tout mes projets</h1>
</BlurFade>
<!-- Posts -->
<section>
	<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
		{#each DATA.projects as project, id}
			<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
				<ProjectCard
					href={project.href}
					title={project.title}
					description={project.description}
					dates={project.dates}
					tags={project.technologies}
					image={project.image}
					video={project.video}
					links={project.links}
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
