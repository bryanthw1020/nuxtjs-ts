<template>
  <v-overlay class="components__appOverlay" :value="overlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['overlay'])
})
export default class AppOverlay extends Vue {}
</script>

<style lang="scss" scoped>
.components__appOverlay {
  z-index: 250 !important;
}
</style>