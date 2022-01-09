<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand href="#">
          <span class="nav-title" >{{ name }}</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- Right aligned nav items -->
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav>
            <NavItem
                v-for="(link, i) in links"
                :key="i"
                :name="link.name"
            />
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import {user} from '../../data/db.json'
import NavItem from "@/components/reusables/NavItem";

export  default {
  name: 'Navbar',
  components: {
    NavItem,
  },
  data() {
    return {
      links: [
        {
          name: 'Projects',
          url: '#'
        },
        {
          name: 'Skills',
          url: '#'
        },
        {
          name: 'Contact',
          url: '#'
        },
      ]
    }
  },
  computed: {
    name: () => user.first_name + " " + user.last_name
  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-bar{
  }
  .nav-title {
    font-size: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
</style>