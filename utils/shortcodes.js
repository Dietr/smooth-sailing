module.exports = {
  icon: function (name) {
    return `<svg class="c-icon c-icon--${name}" role="img" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${name}"></use>
    </svg>`
  },
  image: function (format, image, altText, modifier) {
    return `<img
    class="c-image ${modifier} lazyload fade-in"
    src="/assets/images/${format}/${image}@thumb.${format}"
    data-sizes="auto"
    data-srcset="
      /assets/images/${format}/${image}@600.${format} 300w,
      /assets/images/${format}/${image}@900.${format} 600w,
      /assets/images/${format}/${image}@1280.${format} 900w,
      /assets/images/${format}/${image}@1600.${format} 1280w"
    alt="${altText}">`
  }
}
