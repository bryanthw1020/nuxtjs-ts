<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AppOverlay from '@/components/AppOverlay.vue'
import AppNotificationMessage from '@/components/AppNotificationMessage.vue'

@Component({
  components: {
    AppOverlay,
    AppNotificationMessage
  }
})
export default class LayoutDefault extends Vue {}
</script>
