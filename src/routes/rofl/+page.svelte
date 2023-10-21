<script>
  import Card from '$lib/components/card.svelte';
</script>

<div class="flex min-h-screen flex-col justify-center text-center">
  <h1 class="p-2 text-2xl font-bold text-primary">rofl.cat</h1>
  <div class="container m-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
    <Card image="rofl1" tag1="acrobat" tag2="staring" title="rofl"></Card>
    <Card image="rofl2" tag1="ominous" tag2="staring" title="rofl"></Card>
  </div>
  <div class="py-4" />
  <footer class="footer footer-center bg-secondary-content p-4 text-base-content">
    <aside>
      <a href="/credits" class="text-xl font-bold">credits</a>
    </aside>
  </footer>
</div>
