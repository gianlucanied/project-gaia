
<template>
  <div class="about">
    <div class="content-wrapper">
      <div class="top-section">    
          <p>I am an Italia art director based in Milan. Graduated from London College of Comunication, (UAL). My work is built around different practices and techniques, including research, art direction, graphic design, web design, thinking and cooking. </p>
          <p>Currently working at Riccardo World.</p>
      </div>

      <div class="bottom-section">
        <div>
            <p>email</p>
            <p class="typing-effect">gaia@email.com</p>
        </div>
        <div>
            <p>tel.</p>
            <p class="typing-effect">+39 123 456 7890</p>
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
  font-family: 'Courier New', Courier, monospace;
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

.bottom-section{
    text-align: center;
    margin-top: 4rem;

}

.bottom-section div{
    margin-top: 2rem;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-around;
}

@keyframes reveal {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
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
