<script lang="ts">
    function ref() {
        const img = document.getElementById('img') as HTMLImageElement
        img.src = img.src + `?rand=${Math.random()}`
    }
</script>

<div class="flex flex-col justify-items-center p-5">
    <div class="phone-1 bg-secondary-content rounded-2xl w-1/5 max-h-sm ml-auto mr-auto">
        <div class="flex flex-col">
            <img src="https://api.zumo.cat/zumocat" class="rounded-t-lg align-top pointer-events-none " alt="zumocat" id="img">
            <h1 class="font-bold text-2xl text-center p-2">cat</h1>
        </div>
    </div>

    <div class="ml-auto mr-auto p-5">
        <button on:click={ref} class="btn btn-primary btn-circle">🐱</button>
    </div>

</div>