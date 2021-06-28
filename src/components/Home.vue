<template>
  <main id="home">
        <div class="about__me">
            <img src="../assets/img/avatar.png" alt="">
            <h1>Parker Faucher</h1>
            <h3>Full Stack Developer</h3>
            <p>"It can only be attributable to human error" - HAL 9000</p>
    
            <div class="skills_projects_link">
                <router-link to="/projects">Projects/Skills</router-link> 
            </div>
        </div>
         
    </main>
   
</template>

<script>

export default {
  name: 'Home',
  props: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
