<template>
  <div>
    <div class="nav-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <div class="container">
          <b-navbar-brand href="#about">
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
                  :url="link.url"
              />
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
    <div class="separator"></div>
  </div>
</template>

<script>
import NavItem from "@/components/reusables/NavItem";

export  default {
  name: 'Navbar',
  components: {
    NavItem,
  },
  data() {
    return {
      name: 'Mohammad Ali',
      links: [
        {
          name: 'Projects',
          url: '#projects'
        },
        {
          name: 'Skills',
          url: '#skills'
        },
        {
          name: 'Contact',
          url: '#contact'
        },
      ]
    }
  },
}
</script>

<style scoped>
  .nav-bar{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .nav-title {
    font-size: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
  .separator {
    height: 80px;
  }
</style>