<template>
  <g-link class="logo" to="/">
    <span class="logo__text">&larr; {{ $static.metadata.siteName }}</span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    margin-right: 0.5em;
  }
}
</style>
