<template>
  <div class="container">
    <div class="carousel row">
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
        <img
          v-for="(img, idx) in project.image"
          :key="idx"
          :src="img"
          alt="Project Image"
        />
      </div>

      <p class="description-project">{{ project.description }}</p>
      <p class="location" v-html="project.location"></p>
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
        "../../public/immagini_video_high_res/Loro-Piana_Spring-Summer-2024_Collection-Presentation-2-Set-Up-1-scaled.jpeg",
        "../../public/immagini_video_high_res/futuristic.avif",
        "../../public/immagini_video_high_res/equilibrio_1.jpg",
        "../../public/immagini_video_high_res/Loro-Piana_Fall-Winter-2024-2025_Collection-Presentation_Set-Up-1-1-scaled.jpg",
      ],
      projects: [
        {
          role: "SET DESIGN",
          title: "JOSHUA SERAFIN FOR HORST 2025",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
            "../../public/immagini_video_high_res/HORST.jpg",
          ],

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
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Convey reached its third edition, establishing itself as a prominent international platform and accelerator for design. In close
collaboration with Simple Flair studio, I had the role of project manager of the exhibition and event producer, keep deadlines
and overseeing the brand identity and art direction for the setup and spatial design of the new location in the heart of Porta
Venezia. The project expanded along the street, creating a cohesive and engaging territorial experience that seamlessly
integrated various brand showcases and initiatives.`,
          location: `shown at <br>
Milan Design Week <br>
Via Rosolino Pilo 14, Milano <br>
10 - 13 April 2025`,
          links: ["https://www.instagram.com/c_o_n_v_e_y/?hl=en"],
        },
        {
          role: "CREATIVE PRODUCTION",
          title: "PRADA FW25 SHOW",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
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
        {
          role: "CREATIVE PRODUCTION",
          title: "PRADA ALWAYS ON",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Definition of creative briefs and image research.
Management of all phases of the creative production: creative partners (set design team, styling team, DOP team, editors,
models), fees negotiation, budget alignment.
Coordination of pre-production logistc and post-production scheduling.
Cross-funcational alignment with internal departments (Merchandising, Product, GTM, E-commerce, Paid Media)`,
          location: "",
          links: [
            "https://www.tiktok.com/@prada/video/7503701471863622934?lang=en",
            "https://www.tiktok.com/@prada/video/7478371736174546198?lang=en",
            "https://www.tiktok.com/@prada/video/7496428452103556374?lang=en",
          ],
        },
        {
          role: "EVENT PRODUCTION",
          title: "EQUILIBRIO PROJECT 2024",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Equilibrio is a yearly art residency and music festival taking place in Porto Ferro, Sardinia where emerging artists and experimental music
merge in a 7 days community experience.
I was part of the collective, overseeing the the production of the festival (logistic, artists accommodation, food and beverage
organisation), the set design of the space and the communication (social media content, copywriting) and business developments (connect
with potential partners, make presentations and planning)`,
          location: "",
          links: [" https://www.instagram.com/project.equilibrio/?hl=en"],
        },

        {
          role: "FEATURE WRITING",
          title: "SUZANNE CIANI X NR MAGAZINE",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Interview to Suzanne Ciani - the legendary electronic music pioneer - discussing her decades-long career, transcendence in
sound, and reshaping consciousness. <br>
Interview by Gaia Grisanti <br>
Photography by Yudo Kurita <br>
Styling by Elidad <br>
Clothes Bottega Veneta`,
          location: "",
          links: ["https://www.instagram.com/p/DFiTuY5I8kU/?hl=en"],
        },

        {
          role: "CREATIVE PRODUCTION",
          title: "ACNE STUDIOS FW23 SHOW",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Support in all the digital content production for FW23 Acne Studios Show: pre-production logistic and post production phases, assisting onsite for all
social-first content, ensuring alignment with the brand guideline.
Production of ad-hoc timelines for content production, post-production and delivery for all social platforms.
Image and film coordination of KOLs, celebrities and Talents at the photocall.
Definition of the the social editorial calendars and content rollouts.`,
          location:
            "shown at Lycée Carnot 145 Boulevard Malesherbes in the 17th arrondissement, Paris",
          links: ["https://www.youtube.com/watch?v=SvYFB6Is_kE"],
        },

        {
          role: "CREATIVE PRODUCTION",
          title: "ACNE STUDIOS SS23 SHOW",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Support in all the digital content production for FW23 Acne Studios Show: pre-production logistic and post production phases, assisting onsite for all
social-first content, ensuring alignment with the brand guideline.
Production of ad-hoc timelines for content production, post-production and delivery for all social platforms.
Image and film coordination of KOLs, celebrities and Talents at the photocall.
Definition of the the social editorial calendars and content rollouts`,
          location:
            "shown at Palais De Tokyo 13 Av. du Président Wilson, 75116 Paris, France",
          links: ["https://www.youtube.com/watch?v=NWx5hKTwO5I&t=6s"],
        },

        {
          role: "CREATIVE PRODUCTION",
          title: "ACNE STUDIOS DIGITAL CONTENT",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Art direction and content production for Acne Studios Tik Tok channel, featuring runway content,
Backstage, everyday storytelling.
Production of ad-hoc timelines for content production, post-production and delivery for all social platforms.
Coordination the social editorial calendars and content rollouts.`,
          location: "",
          links: [
            "https://www.tiktok.com/@acnestudios/video/7176652147130404101?lang=en",
            "https://www.tiktok.com/@acnestudios/video/7195245894218960134?lang=en",
            "https://www.tiktok.com/@acnestudios/video/7206351986193665285?lang=en",
          ],
        },

        {
          role: "CREATIVE PRODUCTION",
          title: "LORO PIANA FW24 LOOKBOOK",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Definition of creative briefs and image research.
Management of all phases of the content production: managing creative partners (set design team, styling team, DOP team,
editors, models)
Cross-funcational alignment with internal departments (Merchandising, Product, GTM, E-commerce, Paid Media)`,
          location: "",
          links: [
            "https://www.tiktok.com/@loropiana/video/7397468770744143136?lang=en",
            "https://www.tiktok.com/@loropiana/video/7390771009902611744?lang=en",
            "https://www.tiktok.com/@loropiana/video/7390771009902611744?lang=en",
          ],
        },

        {
          role: "CREATIVE PRODUCTION",
          title: "LORO PIANA HOLIDAY CAMPAIGN FW24",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `Definition of creative briefs and image research.
Management of all phases of the content production: managing creative partners (set design team, styling team, DOP team,
editors, models)
Cross-funcational alignment with internal departments (Merchandising, Product, GTM, E-commerce, Paid Media)`,
          location: "",
          links: [
            "https://www.tiktok.com/@loropiana/video/7436464688558247190?lang=en",
            "https://www.tiktok.com/@loropiana/video/7437198687098490134?lang=en",
            "https://www.tiktok.com/@loropiana/video/7448007045887888662?lang=en",
          ],
        },

        {
          role: "EVENT + TALENTS COORDINATION",
          title: "LORO PIANA MILAN DESIGN WEEK 2024",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `During my in-house experience at Loro Piana, I was in charge of social media and talents coordination.
My task was implementing the awareness of the brand, by activating the right talents and digital creators.
MY role required the creation of and influencer strategy and digital creators strategy to increase the awareness of the brand.
I was particularly taking care of organising the talents journey (fitting, seeding, travels, accommodations),coordinating their
presence at events and taking care of content creation.
This process involved a high level of budget management, fees negotiation and internal coordination with communication teams.
Talents involved: @fredstauffer @brendahashtag @stylenotcom @highsnobiety @culted @juliahobbs`,
          location: "",
          links: [
            "https://www.tiktok.com/@loropiana/video/7359578713257790753?lang=en",
          ],
        },

        {
          role: "EVENT + TALENTS COORDINATION",
          title: "LORO PIANA SS24 PRESS PRESENTATION",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `During my in-house experience at Loro Piana, I was in charge of social media and talents coordination.
My task was implementing the awareness of the brand, by activating the right talents and digital creators.
MY role required the creation of and influencer strategy and digital creators strategy to increase the awareness of the brand.
I was particularly taking care of organising the talents journey (fitting, seeding, travels, accommodations),coordinating their
presence at events and taking care of content creation.
This process involved a high level of budget management, fees negotiation and internal coordination with communication teams.
Talents involved: @fredstauffer @brendahashtag @stylenotcom @highsnobiety @culted @juliahobbs`,
          location: "",
          links: [
            "https://www.tiktok.com/@loropiana/video/7281702802357865760?lang=en",
          ],
        },

        {
          role: "EVENT + TALENTS COORDINATION",
          title: "LORO PIANA FW24 PRESS PRESENTATION",
          image: [
            "../../public/immagini_video_high_res/details.jpg",
            "../../public/immagini_video_high_res/details-2.jpg",
          ],
          description: `During my in-house experience at Loro Piana, I was in charge of social media and talents coordination.
My task was implementing the awareness of the brand, by activating the right talents and digital creators.
MY role required the creation of and influencer strategy and digital creators strategy to increase the awareness of the brand.
I was particularly taking care of organising the talents journey (fitting, seeding, travels, accommodations),coordinating their
presence at events and taking care of content creation.
This process involved a high level of budget management, fees negotiation and internal coordination with communication teams.
Talents involved: @fredstauffer @brendahashtag @stylenotcom @highsnobiety @culted @juliahobbs`,
          location: "",
          links: [
            "https://www.tiktok.com/@loropiana/video/7339203239247629600?lang=en",
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
  height: auto;
  object-fit: contain;
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
}

.link a {
  color: white;
  text-decoration: none;
  position: relative;
  display: block;
  margin-bottom: 0.2rem;
}

.link a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 1px;
  background-color: white;
  transition: width 1s ease;
}

.link a:hover::after {
  width: 100%;
}

.section-img {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.section-img img {
  width: 300px;
  height: auto;
  object-fit: cover;
}

</style>
