<script>
    import Tag from './hash.svelte';
</script>

<div class="phone-1 bg-secondary-content rounded-2xl w-3/5  max-h-sm">
    <div class="flex flex-col">
        <img src="/cat.png" class="rounded-t-lg align-top" alt="zumocat">
        <h1 class="font-bold text-2xl align-left mr-auto p-2">cat</h1>
        <div class="flex pl-2 pb-2">
            <Tag name="cute"></Tag>
            <p class="pl-1"/>
            <Tag name="eating"></Tag>
        </div>
    </div>
</div>