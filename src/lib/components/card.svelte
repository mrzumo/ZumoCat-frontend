<script lang="ts">
  import Tag from '$lib/components/hash.svelte';

  export let image: string;
  export let tags: string;

  let tagArray: string[] = tags.split(',');
</script>

<div class="max-h-sm phone-1 w-3/5 rounded-2xl bg-secondary-content">
  <div class="flex flex-col">
    <img src={image} class="pointer-events-none rounded-t-lg align-top" alt="zumocat" />
    <h1 class="align-left mr-auto p-2 text-2xl font-bold">cat</h1>
    <div class="flex pb-2 pl-2">
      {#each tagArray as t}
      <Tag name={t}></Tag>
      {#if tagArray.indexOf(t) != tagArray.length - 1 && tagArray.indexOf(t) > 0}
        <div class="pl-1" />
      {/if}
      {/each}
    </div>
  </div>
</div>
