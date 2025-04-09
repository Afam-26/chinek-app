document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById("featured-scroll");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  const scrollSpeed = 2;
  let autoScrollInterval;

  // Clone all product cards for infinite loop illusion
  const items = Array.from(scrollContainer.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.classList.add("clone"); // optional: for debugging or styling
    scrollContainer.appendChild(clone);
  });

  // ✅ Auto-scroll logic
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Loop back to start when reaching the end
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // ✅ Manual scroll buttons
  scrollLeftBtn?.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  scrollRightBtn?.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });

  // ✅ Pause auto-scroll on hover
  scrollContainer.addEventListener('mouseenter', stopAutoScroll);
  scrollContainer.addEventListener('mouseleave', startAutoScroll);

  // Start auto-scroll when ready
  startAutoScroll();
});
