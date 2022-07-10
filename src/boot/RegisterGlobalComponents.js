import { boot } from 'quasar/wrappers'
import WIcon from 'src/components/icon_components/WIcon.vue'
import WName from 'src/components/icon_components/WName.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.component('WIcon', WIcon)
  app.component('WName', WName)
})
