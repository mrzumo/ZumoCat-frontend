<script lang="ts">
  import { onMount } from 'svelte';
  import Tag from '$lib/components/hash.svelte';

  interface image {
    title: string;
    description: string;
    tags: string[];
    url: string;
  }

  onMount(() => {
    refresh();
  });

  let image: HTMLImageElement;
  var tagss: string[];
  var title: string;
  var desc: string;

  function refresh() {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };

    fetch('https://api.zumo.cat/random', config)
      .then((response) => response.json())
      .then((data) => {
        image.src = data.url;
        tagss = data.tags;
        title = data.title;
        desc = data.description;
      });
  }
</script>

<div class="flex flex-col justify-items-center p-5">
  <div class="max-h-sm phone-1 ml-auto mr-auto w-1/5 scale-110 rounded-2xl bg-secondary-content">
    <div class="flex flex-col">
      <img class="pointer-events-none rounded-t-lg align-top" alt="zumocat" id="image" bind:this={image} />
      {#if title}
        <h1 class="p-2 text-center text-2xl font-bold">{title}</h1>
      {:else}
        <h1 class="p-2 text-center text-2xl font-bold">cat</h1>
      {/if}
      {#if desc}
        <h1 class="pb-2 text-center text-xl">{desc}</h1>
      {/if}
      <div class="flex pb-2 pl-2">
        {#if tagss}
          {#each tagss as tagg}
            <Tag name={tagg}></Tag>
          {/each}
        {/if}
      </div>
    </div>
  </div>

  <div class="ml-auto mr-auto p-5">
    <button on:click={refresh} class="btn btn-circle btn-primary">🐱</button>
  </div>
</div>
