<script lang="ts">
  function ref() {
    const img = document.getElementById('img') as HTMLImageElement;
    img.src = img.src + `?rand=${Math.random()}`;
  }
</script>

<div class="flex flex-col justify-items-center p-5">
  <div class="max-h-sm phone-1 ml-auto mr-auto w-1/5 rounded-2xl bg-secondary-content">
    <div class="flex flex-col">
      <img src="https://api.zumo.cat/zumocat" class="pointer-events-none rounded-t-lg align-top" alt="zumocat" id="img" />
      <h1 class="p-2 text-center text-2xl font-bold">cat</h1>
    </div>
  </div>

  <div class="ml-auto mr-auto p-5">
    <button on:click={ref} class="btn btn-circle btn-primary">🐱</button>
  </div>
</div>
