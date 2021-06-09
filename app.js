const app = Vue.createApp({
    data() {
      return {
        firstName: 'Nat',
        lastName: 'Richmond',
        email: 'nat@nat.com',
        gender: 'female',
        picture: 'https://pbs.twimg.com/profile_images/1366476700809388034/a0GeAoay.jpg',
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()

        // console.log(results)

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
  })

  app.mount('#app')
