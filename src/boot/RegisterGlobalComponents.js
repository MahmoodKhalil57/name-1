import { boot } from 'quasar/wrappers'
import WIcon from 'components/WIcon.vue'
import WName from 'components/WName.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.component('WIcon', WIcon)
  app.component('WName', WName)
})
