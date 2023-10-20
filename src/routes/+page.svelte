<script lang="ts">
  import { onMount } from 'svelte';
  import LoadingCard from '$lib/components/cardLoading.svelte';
  import Card from '$lib/components/card.svelte';
  import Tag from '$lib/components/hash.svelte';
  import axios from 'axios';
  import type { PageData } from './$types';

  export let data: PageData;
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

    axios.get('https://api.zumo.cat/random').then(function (response) {
      const parsed: image = response.data;
      image.src = parsed.url;
      tagss = parsed.tags;
      title = parsed.title;
      desc = parsed.description;
    });
  }
</script>

<div class="flex min-h-screen flex-col justify-center text-center">
  <h1 class="p-2 text-2xl font-bold text-primary">cat feed</h1>
  <div class="container m-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
    {#await data.streamed.cats}
      {#each Array(10) as _}
        <LoadingCard />
      {/each}
    {:then cats}
      {#each cats as cat}
        <Card image={cat.url} tags={cat.tags.join(",")}></Card>
      {/each}
    {:catch error}
      <p class="text-red-500">{error.message}</p>
    {/await}
  </div>

  <div class="flex flex-col justify-items-center p-5">
    <h1 class="p-5 text-2xl font-bold text-primary">random cat</h1>
    <div class="max-h-sm phone-1 ml-auto mr-auto w-1/5 rounded-2xl bg-secondary-content">
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
      <div class="ml-auto mr-auto p-5">
        <button on:click={refresh} class="btn btn-circle btn-primary">🐱</button>
      </div>
    </div>
  </div>

  <div class="py-4" />
  <footer class="footer footer-center bg-secondary-content p-4 text-base-content">
    <aside>
      <a href="/credits" class="text-xl font-bold">credits</a>
      <p>you are NOT approved to use these images commercially and you cannot profit from them</p>
    </aside>
  </footer>
</div>
