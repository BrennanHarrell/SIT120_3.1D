<template>
  <div class="nav">
  </div>

  <header class="header">
    Introduction to Responsive Web Apps
    <IMG class="displayed" alt="Deakin img-deakin-logo-white-desktop" src="https://masternav.sync.deakin.edu.au/assets/img-deakin-logo-white-desktop.svg"/>
  </header>

        <main id="content">
            <h2 v-bind:="htmlBind" style="text-align: center;">Creating Responsive Web Apps</h2>
            <p style="text-align: center;">This is my web page to showcase all of my html and css programming. <br>
            Checkout the following links which will showcase some of my other works and signup to view more as well as stay in the loop with what I am working on.</p>
            </main>


          <section>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YrxBCBibVo0?si=0VfUku31uHFacFXV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
          </section>

          <form class="form" @submit="submitted">
            <h3>Sign up to view more</h3>
            <input v-model.number="newItem" type="checkbox">
            <input v-model="newItem" type="radio">
            <br>
            <label  for="fname">First name:</label><br>
            <input v-model.trim="newItem" type="text" placeholder="First name">
            <br>
            <label for="lname">Last name:</label><br>
            <input v-model.trim="newItem" type="text" placeholder="Last name">
            <br>
            <label for="lname">Student ID:</label><br>
            <input v-model.number="studentid" type="number" placeholder="studentID">
            <br>
            <label for="message">Send me a message:</label><br>
            <textarea v-model.lazy="newMessage" placeholder="give feedback on functionality"></textarea>
            <br>
            <input type="submit" value="Submit">
          </form>

        
          <footer style="font-size: 20pt;">
              Stay Tuned
          </footer>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      htmlBind: ""
    }
  },
  methods: {
    submitted() {
      alert("Thank you for signing up!");
    },
  },
}

</script>
