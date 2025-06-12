<template>
  <div>
    <div class="carousel">
      <img :src="images[currentIndex]" alt="Slide" />
    </div>
  </div>

  <div class="project-section">
    <div class="title-section">
      <h1 class="big-title">PORTFOLIO</h1>
      <h1 class="mid-title">TABLE OF:CONTENT</h1>

      <div class="work-section">
        <p v-for="(item, index) in workItems" :key="index">{{ item }}</p>
      </div>
    </div>

    <div
      class="single-project"
      v-for="(project, index) in projects"
      :key="index"
    >
      <div class="roles">{{ project.role }}</div>
      <div class="title-project">{{ project.title }}</div>
      <div class="section-img">
        <img :src="project.image" alt="Project Image" />
      </div>
      <p class="description-project">{{ project.description }}</p>
      <p class="location">{{ project.location }}</p>
      <div class="link">
        <span>LINK TO CONTENT:</span><br />
        <a
          v-for="(link, idx) in project.links"
          :key="idx"
          :href="link"
          target="_blank"
        >
          {{ link }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
      ],
      projects: [
        {
          role: "SET DESIGN",
          title: "JOSHUA SERAFIN FOR HORST 2025",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          description: `“Buried in a Coffin the Size of a Grain of Rice” (Installation) and “Midnight Pearls” (film) were installed in one of the art
pavilion at Horst festival for the 2025 edition. Within this space of meditation, prayer, silence and offering, we are invited to at
once re-enter the body and be transported to an in-between realm. Here, darkness is embraced to discover the first rays of light. A
portal connects the ancestral with the mortal world and allows entities to watch over the current mortal realm, offering guidance to
those willing to receive. We find a guardian watching over an unborn entity, in utero in the swamp.
I was part of the set design team that built the art and the pavilion before Horst Festival.`,
          location: "On view at Horst Festival / Asiat Park Vilvoorde, Belgium",
          links: [
            "https://www.instagram.com/p/DJKC3aINqe7/?hl=en&img_index=1",
            "https://www.instagram.com/p/DJIAvSathGF/?hl=en",
          ],
        },
        {
          role: "PROJECT MANAGEMENT",
          title: "CONVEY 2025",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          description: `Convey reached its third edition, establishing itself as a prominent international platform and accelerator for design. In close
collaboration with Simple Flair studio, I had the role of project manager of the exhibition and event producer, keep deadlines
and overseeing the brand identity and art direction for the setup and spatial design of the new location in the heart of Porta
Venezia. The project expanded along the street, creating a cohesive and engaging territorial experience that seamlessly
integrated various brand showcases and initiatives.`,
          location: `shown at
Milan Design Week
Via Rosolino Pilo 14, Milano
10 – 13 April 2025`,
          links: ["https://www.instagram.com/c_o_n_v_e_y/?hl=en"],
        },
        {
          role: "CREATIVE PRODUCTION",
          title: "PRADA FW25 SHOW",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          description: `Definition of creative briefs and image research.
Management of all phases of the creative production: creative partners (set design team, styling team, DOP team, editors,
models), fees negotiation, budget alignment.
Coordination of pre-production logistc and post-production scheduling.
Cross-funcational alignment with internal departments (Merchandising, Product, GTM, E-commerce, Paid Media)`,
          location: "",
          links: [
            "https://www.instagram.com/p/DGpoHOuNiM1/",
            "https://www.tiktok.com/@prada/video/7462668107073490198?lang=en",
          ],
        },
      ],

      currentIndex: 0,
      interval: null,
      workItems: [
        "CONVEY 2025",
        "PROJECT MANAGMENT",
        "HORST 2025",
        "SET DESIGN",
        "PRADA FW25 SHOW",
        "CREATIVE PRODUCTION",
        "PRADA FW25 CAMPAIGN",
        "CREATIVE PRODUCTION",
        "PRADA FINE JEWELLERY",
        "CREATIVE PRODUCTION",
        "EQUILIBRIO PROJECT 2024",
        "EVENT PRODUCTION",
        "SUZANNE CIANI X NR MAGAZINE",
        "FEATURE WRITING",
        "ACNE STUDIOS FW23 SHOW",
        "CREATIVE PRODUCTION",
        "ACNE STUDIOS SS23 SHOW",
        "CREATIVE PRODUCTION",
        "ACNE STUDIOS DIGITAL CONTENT",
        "CREATIVE PRODUCTION",
        "LORO PIANA FW24 CAMPAIGN",
        "CREATIVE PRODUCTION",
        "LORO PIANA HOLIDAY CAMPAIGN 2024",
        "CREATIVE PRODUCTION",
        "LORO PIANA HOLIDAY CAMPAIGN 2023",
        "CREATIVE PRODUCTION",
        "LORO PIANA MILAN DESIGN WEEK 2024",
        "EVENT + TALENT COORD",
        "LORO PIANA SS24 PRESS PRESENTATION",
        "EVENT + TALENT COORD",
        "LORO PIANA FW24 PRESS PRESENTATION",
        "EVENT + TALENT COORD",
      ],
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    },
  },
};
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

.big-title {
  font-size: 4rem;
  text-align: center;
  padding-bottom: 50px;
}

.mid-title {
  font-size: 3rem;
}

.project-section {
  padding: 100px;
  background-color: black;
  color: white;
}

.work-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  p {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    font-size: 15px;
  }
}

.work-section p:nth-child(2n) {
  text-align: end;
}

.single-project {
  padding-top: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "roles title"
    "image title"
    "desc desc"
    "loc loc"
    "link link";
  gap: 1rem;
}

.roles {
  grid-area: roles;
  align-self: start;
  font-size: 2rem;
}

.title-project {
  grid-area: title;
  align-self: center;
  text-align: end;
  font-size: 3rem;
}

.section-img {
  grid-area: image;
}

.section-img img {
  width: 100%;
  height: auto;
  display: block;
}

.description-project {
  padding-top: 50px;
  grid-area: desc;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  width: 70%;
}

.location {
  grid-area: loc;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
}

.link {
  grid-area: link;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  a {
    color: white;
    text-decoration: none;
  }
}

.link a {
  color: white;
  text-decoration: none;
  position: relative;
}

.link a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 1px;
  background-color: white;
  transition: width 0.5s ease;
}

.link a:hover::after {
  width: 100%;
}
</style>
