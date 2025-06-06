<template>
  <header class="nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/count" class="nav-link">Count</router-link>
  </header>

  <main class="content">
    <router-view />
  </main>
</template>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  z-index: 1000;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.content {
  padding-top: 40px;
}
</style>
