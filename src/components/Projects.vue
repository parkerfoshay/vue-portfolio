<template>
  <div class="calendar"></div>
  <main class="container" id="projects">
    <!-- Show an error message if the REST API doesn't work -->
    <div class="error" v-if="errors">
      Sorry! It seems we can't fetch data righ now 😥
    </div>
    <!-- Otherwise show a section for our portfolio projects and skills section-->
    <section id="portfolio" v-else>
      <!-- loading message -->
      <div class="loading" v-if="loading">
        😴 Loading ...
      </div>

      <!-- show the projects -->
      <div class="projects" v-else>
        <div
          v-for="project in projectsList"
          class="card__custom"
          v-bind:key="project.id"
        >
          <div class="card__custom__text">
            <div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>

            <div class="meta__data d_flex">
              <div class="date">
                <h5>Update at</h5>
                <div>{{ new Date(project.updated_at).toDateString() }}</div>
              </div>
              <img class="avatar" :src="project.owner.avatar_url" />
            </div>
          </div>

          <div class="card__custom__img"></div>
          <div class="card_custom__button">
            <a :href="project.html_url" target="_blank">
              Code
            </a>
          </div>
        </div>

        <div v-if="!loading" style="text-align:center; width: 100%">
          <div v-if="projectsList.length < projects.length">
            <button class="btn_load_more" v-on:click="loadMore()">
              Load More
            </button>
          </div>
          <div v-else>
            <a :href="gitHubLink" target="_blank">Visit My GitHub</a>
          </div>
        </div>

        <div id="skills_section">
          <h2>Development Skills</h2>
          <ul class="skills">
            <li v-for="skill in skills" v-bind:key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GitHubCalendar from "github-calendar";
import skillList from "../assets/data/skills.json"
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
      perPage: 20,
      page: 1,
      projectsList: null,
      skills: skillList,
      projectCount: 5,
      loading: true,
      errors: false,
      gitHubLink: "https://github.com/parkerfoshay",
    };
  },

  methods: {
    fetchData() {
      this.axios
        .get(
          `https://api.github.com/users/parkerfoshay/starred?repos?per_page=${this.perPage}&page=${this.page}`
        )
        .then((response) => {
          this.projects = response.data
          
          this.projects.forEach((project) => {
            if (
              project.language !== null &&
              !this.skills.includes(project.language)
            ) {
              this.skills.push(project.language);
            }
          });
        })
        .catch((error) => {
          console.log(error);
          this.errors = true;
        })
        .finally(() => {
          this.loading = false;
          this.getProjects();
        });
    },

    getProjects() {
      this.projectsList = this.projects.slice(0, this.projectCount);
      return this.projectsList;
    },

    loadMore() {
      if (this.projectsList.length <= this.projects.length) {
        this.projectCount += 5;
        this.projectsList = this.projects.slice(0, this.projectCount);
      }
    },
    trimTitle: function(text) {
      let title = text.replaceAll("-", " ").replace("_", " ");
      if (title.length > 15) {
        return title.slice(0, 12) + " ...";
      }
      return title;
    },
    trimText: function(text) {
      //console.log(text.slice(0, 100));
      if (text.length > 100) {
        return text.slice(0, 100) + " ...";
      }
      return text;
    },
  },

  mounted() {
    this.fetchData();
    GitHubCalendar(".calendar", "parkerfoshay", { responsive: true });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
