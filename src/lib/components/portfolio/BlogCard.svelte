<script lang="ts">
    import BorderBeam from "$lib/components/magic/BorderBeam.svelte";
	export let title: string = '';
	export let date: string = '';
	export let description: string = '';
	export let lien: string = '';
	export let auteur: string = '';
    export let pdp: string = '';
	export let role: string='';
</script>

<article
  	class="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background mb-8"
>
<BorderBeam size={150} duration={12} />
	<div class="flex items-center gap-x-4 text-xs">
		<time datetime="2020-03-16" class="text-gray-300">{date}</time>
	</div>
	<div class="group relative">
		<h3
			class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50"
		>
		<span class="absolute inset-0"></span>
			{title}
		</h3>
		<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
			{description}
		</p>
		</div>
		<div class="relative mt-8 flex items-center gap-x-4">
			<img
			src={pdp}
			alt="bhide"
			class="h-10 w-10 rounded-full bg-gray-50"
			/>
			<div class="text-sm leading-5">
			<p class="font-semibold text-white">
				<span class="absolute inset-0"></span>
						{auteur}
			</p>
			<p class="text-gray-500">{role}</p>
			</div>
		</div>
		</article>
