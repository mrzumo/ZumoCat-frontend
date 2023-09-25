<script lang="ts">
  import Card from '$lib/components/card.svelte';

  function ref() {
    const img = document.getElementById('img') as HTMLImageElement;
    if (img) {
      img.src = img.src + `?rand=${Math.random()}`;
    }
  }
</script>

<div class="flex min-h-screen flex-col justify-center text-center">
  <h1 class="p-2 text-2xl font-bold text-primary">cat feed</h1>
  <div class="container m-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
    <Card image="cat" tag1="cute" tag2="eating"></Card>
    <Card image="cat" tag1="cute" tag2="eating"></Card>
  </div>

  <div class="flex flex-col justify-items-center p-5">
    <h1 class="p-5 text-2xl font-bold text-primary">random cat</h1>
    <div class="max-h-sm phone-1 ml-auto mr-auto md:w-1/5 w-3/5 rounded-2xl bg-secondary-content">
      <div class="flex flex-col">
        <img src="https://api.zumo.cat/zumocat" class="pointer-events-none rounded-t-lg align-top" alt="zumocat" id="img" />
        <h1 class="p-2 text-center text-2xl font-bold">cat</h1>
      </div>
    </div>
    <div class="ml-auto mr-auto p-5">
      <button on:click={ref} class="btn btn-circle btn-primary">🐱</button>
    </div>
  </div>

  <div class="py-4" />
  <footer class="footer footer-center bg-secondary-content p-4 text-base-content">
    <aside>
      <a href="/credits" class="text-xl font-bold">credits</a>
    </aside>
  </footer>
</div>
