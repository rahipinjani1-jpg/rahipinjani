const prefetched = new Set();

export function prefetchProject(images) {
  images.forEach((src) => {
    if (prefetched.has(src)) return;
    prefetched.add(src);
    const img = new Image();
    img.src = src;
  });
}
