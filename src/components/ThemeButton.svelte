<script>
  const dark = "dark";
  const html = document.querySelector("html");
  $: isDark = html.classList.contains(dark);
</script>

<button
  on:click={() => {
    html.classList.toggle(dark);
  }}
>
  Клик
</button>
