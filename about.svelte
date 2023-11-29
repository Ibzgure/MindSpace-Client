<script>
  export let title = 'About Us';
  export let content = 'This is the about us page content.';
</script>

<div class="h-full w-full flex flex-col justify-center items-center  relative wrapper bg-gray-200">
  <div class="p-8 text-center max-w-[45ch] flex flex-col gap-4 z-10 bg-white rounded-md shadow-lg">
    <p class="text-xl">
      <span class="font-bold text-Tertiary2">
        {title}
      </span>
      is under construction
    </p>
    <p class="text-sm text-gray-700">{content}</p>
  </div>
</div>

<style>
  .wrapper {
    // Your styles for the wrapper
  }

  .wrapper::after {
    position: absolute;
    content: '';
    inset: 0;
    background-image: url(/images/memphis-pattern_1045-810.avif);
    opacity: 0.02;
    z-index: 0;
  }
</style>
