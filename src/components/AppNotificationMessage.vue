<template>
  <v-snackbar
    class="components__appNotificationMessage"
    :timeout="0"
    :color="snackbar.color"
    v-model="snackbar.show"
  >
    {{ snackbar.message }}
    <v-btn dark @click="$store.dispatch('closeSnackbar')" icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState(['snackbar'])
  }
})
export default class AppNotificationMessage extends Vue {}
</script>