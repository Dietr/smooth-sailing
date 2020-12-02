module.exports = {
  icon: function (name) {
    return `<svg class="c-icon c-icon--${name}" role="img" aria-hidden="true">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${name}"></use>
    </svg>`
  },
  image: function (image, altText, modifier) {
    return `<img
    class="c-image ${modifier} lazyload fade-in"
    src="/assets/images/png/${image}@thumb.png"
    data-sizes="auto"
    data-srcset="
      /assets/images/png/${image}@600.png 300w,
      /assets/images/png/${image}@900.png 600w,
      /assets/images/png/${image}@1280.png 900w,
      /assets/images/png/${image}@1600.png 1280w"
    alt="${altText}">`
  }
}
