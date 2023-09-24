<script>
    import Tag from './hash.svelte';

    export let image;
    export let tag1;
    export let tag2;
</script>

<div class="phone-1 bg-secondary-content rounded-2xl w-3/5 max-h-sm">
    <div class="flex flex-col">
        <img src="/{image}.png" class="rounded-t-lg align-top pointer-events-none " alt="zumocat">
        <h1 class="font-bold text-2xl align-left mr-auto p-2">cat</h1>
        <div class="flex pl-2 pb-2">
            <Tag name="{tag1}"></Tag>
            <div class="pl-1"/>
            <Tag name="{tag2}"></Tag>
        </div>
    </div>
</div>