<template>
  <main id="home">
    <div class="about__me">
      <img src="../assets/img/avatar.png" alt="" />
      <h1>Parker Faucher</h1>
      <h3>Full Stack Developer</h3>
      <p class="about_me_desc">
        I am a self-taught Software Engineer who loves to take on new challenges
        by diving head-first into every challenge and learning everything I can
        about it.
      </p>

      <div class="skills_projects_link">
        <a href="#" v-scroll-to="'#projects'">Projects</a> <br />
        <a href="https://www.linkedin.com/in/parker-faucher/"
          ><BIconLinkedin
        /></a>
      </div>
    </div>
  </main>
  <Projects />
</template>

<script>
import Projects from "./Projects";
import { BIconLinkedin } from "bootstrap-icons-vue";
export default {
  name: "Home",
  components: { Projects, BIconLinkedin },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
