<template>
  <q-layout view="hhh lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="\SVG\twomangoes-ripe.svg" />
        </q-avatar>

        <q-toolbar-title>Farmweb</q-toolbar-title>
      </q-toolbar>

      <q-tabs alignment="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
        <q-route-tab to="/page4" label="Page Four" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-sticky
        position="bottom-left"
        :scroll-offset="10"
        :offset="[18, 18]"
      >
        <q-btn push color="green" rounded>
          <q-avatar icon="fa-brands fa-whatsapp"> </q-avatar>
          Whatsapp Us
          <q-badge color="red" rounded floating>
            <q-avatar icon="fa-solid fa-exclamation" size="1.5em"> </q-avatar>
          </q-badge>
        </q-btn>
      </q-page-sticky>
    </q-page-container>

    <q-footer>
      <div class="q-pa-md q-gutter-sm">
        <p>
          I was gonna take the time to sit down and write you a little letter.
          But I thought a song would probably be a little better. Instead of a
          ,letter. That you'd probably just shred up--yeah. I stumbled on your
          picture yesterday and it made me stop and think of. How much of a
          waste it'd ,be for me to put some ink to, a stupid piece a. Paper, I'd
          rather let you see how. Much I fucking hate you in a freestyle.kol
          5ara
        </p>
        <p>
          So bad, I’m so good that I’m so bad. Guarantee I’ll be the greatest
          thing you ever had. ‘Cause you ain't never met nobody like me. And you
          ain't gonna wanna fuck nobody else again. I'ma make you learn to
          appreciate me, differentiate me. From these phony, little fishy and
          sissy fake G’s. Skip over the "huggy bear," and all the "kissy face,"
          please. Initiate phase three, missy, now service me. Take another shot
          of Jäger, shakin' so nervously. Take your time, baby, oh, you’re the
          bomb, baby. Oh, you’re doing that even better than your mom, lady. I
          told you why I’m Shady, you didn't listen now, did ya?. Relax woman,
          you know that I’m only kiddin' with ya. Got a twisted sense of humor,
          its warped, but I didn't hit ya. I think you’re finally starting to
          get the picture. I’m just… So bad, I’m so good that I’m so bad.
          Guarantee I’ll be the greatest thing you ever had. ‘Cause you ain't
          never met nobody like me. And you ain't gonna wanna fuck nobody else
          again. I'ma make you learn to appreciate me, differentiate me. From
          these phony, little fishy and sissy fake G’s. Skip over the.
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
  import { ref } from 'vue'

  export default {
    // name: 'LayoutName',

    // setup () {
    //   const leftDrawerOpen = ref(false)

    //   return {
    //     leftDrawerOpen,
    //     toggleLeftDrawer () {
    //       leftDrawerOpen.value = !leftDrawerOpen.value
    //     }
    //   }
    // }
  }
</script>
