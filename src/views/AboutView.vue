<template>
  <header class="header">
    About me
  </header>

  <div class="intro-container">
    <div class="aboutText">
    <br>
    <main>
      I have recently started learning how to develop responsive web
      apps using Vue, HTML and CSS.I have created this web app to
      showcase my journey of what I have learnt as well as the projects
      I will be creating.
      <br>
      If you are interested in learning more please complete the sign up
      form on the home page and you will receive new information as it
      comes out.
    </main>
  </div>
  </div>
  <br>
  <br>
  <section>
  <table class="table">
    <h3>You can check out some of my other work here </h3>
            <tr>
              <th>My Github</th> <th>My videos</th>
            </tr>
            <tr>
              <td>
               <a href="https://github.com/BrennanHarrell?tab=repositories" class="btn">Github Link</a>
              </td> 
              <td>
                <a href="https://video.deakin.edu.au/media/t/1_epxiydms" class="btn">Airdeakin Link</a>
              </td>
            </tr>            
    </table>
  </section>
  <br>
  <section>
    <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2006242/sp/200624200/embedIframeJs/uiconf_id/32026212/partner_id/2006242?iframeembed=true&playerId=kaltura_player&entry_id=1_uhh09jtl&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_msljlmvr" 
    width="500" height="281" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *"  frameborder="0" title="SIT120 2.2C"></iframe>
  </section>

    <div>
      <footer style="font-size: 20pt;">
          Stay Tuned
      </footer>

    </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'AboutView',
  components: {
  }
}
</script>

<style>
@import "/public/aboutme.css";
</style>