<script>
    import Card from './card.svelte';
</script>

<div class="flex flex-col justify-center text-center min-w-screen">
    <h1 class="text-2xl font-bold text-primary p-2">zumo.cat</h1>
    <div class="container m-auto grid justify-items-center gap-8 grid-cols-1 md:grid-cols-2">
            <Card></Card>
            <Card></Card>
    </div>
    <div class="py-4"/>
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <nav>
            <header class="footer-title">Services</header>
            <a class="link link-hover" href="/credits">credits</a>
            <a class="link link-hover">something</a>
            <a class="link link-hover">something 2</a>
            <a class="link link-hover">something 3</a>
        </nav>
    </footer>
</div>

