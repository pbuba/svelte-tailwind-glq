<script>
  import Close from "./Icons/Close.svelte";
  import Menu from "./Icons/Menu.svelte";
  import ThemeControl from "./ThemeControl.svelte";

  let active = true;
  const toggle = () => {
    active = !active;
  };
</script>

<div class="px-4 lg:my-16 grid grid-cols-max-content-2 justify-between">
  <div class="grid grid-cols-auto-1fr gap-x-2 z-10">
    <img
      class="w-10 sm:row-span-2"
      src="/src/assets/svelte-logo.svg"
      width="40"
      height="40"
      alt="logo"
    />
    <p class="font-bold self-center">Company</p>
    <p class="hidden sm:block">Company slogan</p>
  </div>

  <nav class="grid absolute top-0 left-0 right-0 sm:static">
    <button
      class="place-self-end mt-2 mr-2 z-10 sm:hidden"
      on:click={toggle}
      type="button"
    >
      {#if active}
        <Close />
      {:else}
        <Menu />
      {/if}
    </button>

    <ul
      class="pb-8 pl-16 sm:p-0 w-full bg-gray-300 dark:bg-black grid sm:grid-flow-col place-self-center gap-x-4 sm:grid"
      class:hidden={!active}
    >
      <li><a href="#">Main</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">About</a></li>
      <li><ThemeControl /></li>
    </ul>
  </nav>
</div>
