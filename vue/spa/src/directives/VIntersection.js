export default {
  mounted(el, binding) {
    const {fetchMorePosts} = binding.value
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { // && page < totalPages) {
        fetchMorePosts()
        //page += 1
      }
    }, options);
    observer.observe(el);
  },
  name: 'inter'
}