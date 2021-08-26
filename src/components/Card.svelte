<script>
  export let album;
</script>

<li class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
  <img
    class="h-32 w-32 flex-shrink-0"
    src={album.photos.data[0].url}
    alt={album.title}
  />
  <div class="px-6 py-4">
    <h3 class="text-lg font-semibold text-gray-800">{album.title}</h3>

    <p class="text-gray-600">Lorem ipsum dolor sit.</p>
  </div>
</li>
