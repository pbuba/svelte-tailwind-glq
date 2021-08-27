<script lang="ts">
  import { operationStore, mutation } from "@urql/svelte";
  import * as types from "../types.d";

  let showModal = false;
  export let title = "";
  const userId = 1;

  function toggleModal() {
    showModal = !showModal;
  }

  const closeModal = () => {
    title = "";
    showModal = false;
  };

  const createAlbums = operationStore<
    types.CreateAlbumInput,
    types.CreateAlbumMutationVariables
  >(types.CreateAlbumDocument);

  const createAlbumMutation = mutation(createAlbums);

  function updateAlbum(newTitle: string) {
    createAlbumMutation({ input: { title: newTitle, userId: String(userId) } });
  }

  const submitForm = () => {
    updateAlbum(title);
    closeModal();
  };
</script>

<button
  class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  type="button"
  on:click={toggleModal}
>
  Open regular modal
</button>
{#if showModal}
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <form
        on:submit|preventDefault={submitForm}
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-500 outline-none focus:outline-none"
      >
        <!--header-->
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
        >
          <h3 class="text-3xl font-semibold">Modal Title</h3>
          <button
            class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            on:click={toggleModal}
          >
            <span class="text-black"> × </span>
          </button>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
          <div class="mb-3 pt-0">
            <input
              bind:value={title}
              type="text"
              placeholder="TITLE"
              class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
        </div>
        <!--footer-->
        <div
          class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
        >
          <button
            class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            on:click={toggleModal}
          >
            Close
          </button>
          <button
            class="bg-emerald-500 dark:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            disabled={up}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}
