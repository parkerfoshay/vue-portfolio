<template>
  <div>
    <header id="site_header" class="container d_flex">
      <div class="bio__media">
        <img src="../assets/img/avatar.png" alt="" />
        <div class="bio__media__text">
          <h1>Parker Faucher</h1>
          <h3>Full Stack Developer</h3>
          <p>"It can only be attributable to human error" - HAL 9000</p>
        </div>
      </div>
      <nav>
        <router-link to="/">Home</router-link> <span> | </span>
        <router-link to="/projects">Project</router-link>
        <a href="https://">
          <i class="fab fa-github fa-lg fa-fw"></i>
        </a>
      </nav>
      
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

