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
          Formerly: Acne Studios, Loro Piana <br />Clients: Prada, Stone Island,
          Culted, Simple Flair, NR Magazine, Convey
        </p>
      </div>

      <div class="bottom-section">
        <div>
          <p class="email">email</p>
          <p class="typing-effect">
            <a href="mailto:gaia.grisanti@gmail.com">gaia.grisanti@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-image: url(/immagini_video_high_res/AnimatedShape1.svg);
  color: white;
  padding: 6rem 0 3rem 0;
  display: flex;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.content-wrapper {
  max-width: 50vw;
  padding: 1rem;
  background-color: black;
  height: fit-content;
}

.top-section p {
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-top: 0;
}

.bottom-section {
  text-align: center;
  margin-top: 4rem;
}

a {
  text-decoration: none;
  color: black;
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

  .email {
    display: none;
  }
}
</style>
