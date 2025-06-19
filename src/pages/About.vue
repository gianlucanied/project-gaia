<template>
  <div class="about">
    <div class="content-wrapper" data-aos="fade-up" data-aos-duration="2000">
      <div class="top-section">
        <p>
          Working across multiple media and art forms, my practice spans
          creative production, art direction, strategic thinking, and research.
          Specialised in crafting visual and physical narratives that bridge
          culture, fashion, and contemporary design.
        </p>
        <p>
          Formerly: Acne Studios, Loro Piana <br>Clients: Prada, Stone Island,
          Culted, Simple Flair, NR Magazine, Convey
        </p>
      </div>

      <div class="bottom-section">
        <div>
          <p>email</p>
          <p class="typing-effect">gaia.grisanti@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background: black;
  color: white;
  padding: 6rem 0 3rem 0;
  display: flex;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  height: 80vh;
}

.content-wrapper {
  max-width: 50vw;
  padding: 0 1rem;
}

.top-section p {
  line-height: 1.5;
  margin-bottom: 1rem;
}

.bottom-section {
  text-align: center;
  margin-top: 4rem;
}

.bottom-section div {
  margin-top: 2rem;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-around;
}

@keyframes reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.typing-effect {
  display: inline-block;
  clip-path: inset(0 100% 0 0);
  animation: reveal 3s steps(30, end) forwards;
}

@media (max-width: 768px) {
  .content-wrapper {
    max-width: 70vw;
  }
}
</style>
