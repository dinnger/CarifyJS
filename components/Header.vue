<template>
  <header class="navbar">
    <div class="navbar-left">
      <div class="logo">
        <a href="/">
          <Logo />
          <span>ClarifyJS</span>
        </a>
      </div>
      <nav class="main-nav">
        <a href="#" class="nav-link">SMS</a>
        <a href="#" class="nav-link">All docs...</a>
      </nav>
    </div>
    <div class="navbar-right">
      <div class="language-selector">
        <span class="globe-icon">🌐</span>
        <span>English</span>
        <span class="arrow-down">▼</span>
      </div>
      <a href="#" class="nav-link">SDKs</a>
      <a href="#" class="nav-link">Help</a>
      <div class="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <a href="#" class="btn btn-login">Log in</a>
      <a href="#" class="btn btn-signup">Sign up</a>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from "./Logo.vue";
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a202c;
  color: white;
  padding: 0 20px;
  height: 60px;
  width: 100%;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.logo a {
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.main-nav {
  display: flex;
}

.nav-link {
  color: white;
  padding: 0 15px;
  text-decoration: none;
}

.language-selector {
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}

.globe-icon {
  margin-right: 5px;
}

.arrow-down {
  margin-left: 5px;
  font-size: 0.6rem;
}

.search-bar {
  margin: 0 15px;
}

.search-bar input {
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background-color: #2d3748;
  color: white;
  width: 180px;
}

.btn {
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  margin-left: 10px;
}

.btn-login {
  color: white;
  background-color: transparent;
  border: 1px solid #4a5568;
}

.btn-signup {
  color: white;
  background-color: #e53e3e;
  border: none;
}
</style>
