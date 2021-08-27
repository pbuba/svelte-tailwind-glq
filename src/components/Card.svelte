<script>
  export let album;
</script>

<li
  class="flex items-center rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-gray-50 text-gray-900 shadow-lg overflow-hidden"
>
  <img
    class="h-32 w-32 flex-shrink-0"
    src={album.photos.data[0].url}
    alt={album.title}
  />
  <div class="px-6 py-4">
    <h3 class="text-lg font-semibold">{album.title}</h3>

    <p>Lorem ipsum dolor sit.</p>
  </div>
</li>
