<script lang="ts">
  import Tag from '$lib/components/hash.svelte';

  export let image: string;
  export let tag1: string;
  export let tag2: string;
  export let title: string;
</script>

<div class="max-h-sm phone-1 w-3/5 rounded-2xl bg-zinc-800">
  <div class="flex flex-col">
    <div class="relative h-96 w-full overflow-hidden">
      <img src={image} class="pointer-events-none h-full w-full rounded-t-lg object-cover object-center" alt="zumocat" />
    </div>
    <h1 class="mr-auto w-full p-2 text-center text-2xl font-bold capitalize">{title}</h1>
    <div class="flex pb-2 pl-2">
      {#if tag1}
        <Tag name={tag1}></Tag>
      {/if}
      {#if tag2}
        <div class="pl-1" />
        <Tag name={tag2}></Tag>
      {/if}
    </div>
  </div>
</div>
