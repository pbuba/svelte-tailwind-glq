<script>
  import Modal from "./Modal.svelte";
</script>

<div
  class="bg-gray-100 dark:bg-gray-600 dark:text-gray-50 text-gray-900 grid lg:grid-cols-2 2xl:grid-cols-5"
>
  <div
    class="
      px-8 py-12 max-w-md mx-auto 
      sm:max-w-xl 
      lg:px-12 lg:py-24 lg:max-w-full 
      xl:mr-0 
      2xl:col-span-2"
  >
    <div class="xl:max-w-xl">
      <p class="text-5xl lg:text-3xl">Karelia</p>
      <img
        class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
        src="/src/assets/foto.jpeg"
        alt="Karelia"
      />
      <h1
        class="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
      >
        Lorem ipsum dolor sit amet.
        <span class="text-indigo-500">Lorem, ipsum dolor.</span>
      </h1>
      <p class="mt-2 sm:mt-4 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam, ad
        atque vero animi ullam.
      </p>
      <div class="mt-4 space-x-1 space-x-1 sm:mt-6">
        <Modal />
        <a class="btn btn-secondary" href="#">Lorem</a>
      </div>
    </div>
  </div>
  <div class="hidden relative lg:block 2xl:col-span-3">
    <img
      class="absolute inset-0 w-full h-full object-cover object-center"
      src="/src/assets/foto.jpeg"
      alt="Forest"
    />
  </div>
</div>
