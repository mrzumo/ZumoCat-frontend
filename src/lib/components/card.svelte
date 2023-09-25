<script lang="ts">
  import Tag from '$lib/components/hash.svelte';

  export let image: string;
  export let tag1: string;
  export let tag2: string;
</script>

<div class="max-h-sm phone-1 w-3/5 rounded-2xl bg-secondary-content">
  <div class="flex flex-col">
    <img src="/images/cats/{image}.png" class="pointer-events-none rounded-t-lg align-top" alt="zumocat" />
    <h1 class="align-left mr-auto p-2 text-2xl font-bold">cat</h1>
    <div class="flex pb-2 pl-2">
      <Tag name={tag1}></Tag>
      <div class="pl-1" />
      <Tag name={tag2}></Tag>
    </div>
  </div>
</div>
