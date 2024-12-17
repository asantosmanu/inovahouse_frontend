<script setup>
import LargeHeader from '@/components/templates/large/LargeHeader.vue';
import LargeFooter from '@/components/templates/large/LargeFooter.vue';
import ImovelList from '@/components/ImovelList.vue';
</script>
<template>
  <div id="layout-large">

    <large-header />


    <aside>
      <router-view />
    </aside>

    <large-footer />

  </div>
</template>
<style scoped>
#layout-large {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
}

main {
  min-height: 80%;

  padding: 2rem;
  grid-area: main;
}

footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #eeeeee;
  /* grid-area: footer; */
  /* border: 2px solid red; */

}
</style>
