<script lang="ts">
  import Tag from '$lib/components/hash.svelte';

  export let image: string;
  export let tag1: string;
  export let tag2: string;
</script>

<!-- (Taylor's version) -->
<!-- <div class="max-h-sm phone-1 w-3/5 rounded-2xl bg-secondary-content">
  <div class="flex flex-col">
    <img src="/images/cats/{image}.png" class="pointer-events-none rounded-t-lg align-top" alt="zumocat" />
    <h1 class="align-left mr-auto p-2 text-2xl font-bold">cat</h1>
    <div class="flex pb-2 pl-2">
      <Tag name={tag1}></Tag>
      <div class="pl-1" />
      <Tag name={tag2}></Tag>
    </div>
  </div>
</div> -->

<div class="group relative overflow-hidden rounded-lg">
  <div class="relative">
    <img src="/images/cats/{image}.png" class="pointer-events-none h-full w-full transition-all duration-500 group-hover:blur-lg" alt="zumocat" />
    <div class="absolute inset-0 z-0 flex h-full w-full flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h3 class="text-2xl font-semibold">Cat</h3>
      <p class="absolute bottom-4 left-4 flex w-full gap-4">
        <Tag name={tag1} /><Tag name={tag2} />
      </p>
    </div>
  </div>
</div>

<div class="group relative overflow-hidden rounded-lg">
  <div class="relative">
    <img src="/images/cats/{image}.png" class="pointer-events-none h-full w-full" alt="zumocat" />
    <div class="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h3 class="text-2xl font-semibold">Cat</h3>
      <p class="absolute bottom-4 left-4 flex w-full gap-4">
        <Tag name={tag1} /><Tag name={tag2} />
      </p>
    </div>
  </div>
  <div class="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-[999px] backdrop-blur-lg transition-all duration-500 group-hover:h-96 group-hover:w-96 group-hover:rounded-lg"></div>
</div>

<div class="max-h-sm phone-1 w-3/5 rounded-2xl bg-secondary-content">
  <div class="flex flex-col">
    <div class="relative">
      <img src="/images/cats/{image}.png" class="pointer-events-none rounded-t-lg align-top" alt="zumocat" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1E1E2F] via-transparent"></div>
    </div>
    <h1 class="align-left mr-auto p-2 text-2xl font-bold">cat</h1>
    <div class="flex pb-2 pl-2">
      <Tag name={tag1}></Tag>
      <div class="pl-1" />
      <Tag name={tag2}></Tag>
    </div>
  </div>
</div>

<div class="group relative overflow-hidden rounded-lg">
  <div class="relative">
    <img src="/images/cats/{image}.png" class="pointer-events-none h-full w-full" alt="zumocat" />
    <div class="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h3 class="text-2xl font-semibold">Cat</h3>
      <p class="absolute bottom-4 left-4 flex w-full gap-4">
        <Tag name={tag1} /><Tag name={tag2} />
      </p>
    </div>
  </div>
  <div class="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-[999px] backdrop-blur-lg transition-all duration-500 group-hover:h-96 group-hover:w-48 group-hover:rounded-md"></div>
</div>
