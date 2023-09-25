<script>
    import Card from './card.svelte';

    function ref() {
        const img = document.getElementById('img')
        if (img) {
            img.src = img.src + `?rand=${Math.random()}`
        }
    }
</script>

<div class="flex flex-col justify-center text-center min-h-screen">
    <h1 class="text-2xl font-bold text-primary p-2">cat feed</h1>
    <div class="container m-auto grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2">
            <Card image="cat" tag1="cute" tag2="eating"></Card>
            <Card image="cat" tag1="cute" tag2="eating"></Card>
    </div>

    <div class="flex flex-col justify-items-center p-5">
        <h1 class="text-2xl font-bold text-primary p-5">random cat</h1>
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

    <div class="py-4"/>
    <footer class="footer footer-center p-4 bg-secondary-content text-base-content">
        <aside>
            <a href="/credits" class="font-bold text-xl">credits</a>
        </aside>
    </footer>
</div>
