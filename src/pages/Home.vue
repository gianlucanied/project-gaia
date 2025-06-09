<template>
  <div>
    <div class="carousel">
      <img :src="images[currentIndex]" alt="Slide" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80'
      ],
      currentIndex: 0,
      interval: null
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }, 3000)
    }
  }
}
</script>

<style scoped>
.carousel {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}
</style>
