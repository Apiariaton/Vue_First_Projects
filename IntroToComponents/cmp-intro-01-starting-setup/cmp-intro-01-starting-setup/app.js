const app = Vue.createApp({
data()
{
    return {
        friends: [
            {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234567890',
                email: 'manuel@localhost.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '987654321',
                email: 'julie@localhost.com'
            },
        ]    
    }
},

});

app.component('friend-contact',{
    template:  `<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetailsAreVisible()">{{detailsAreVisible ? 'Hide' : 'Show Details'}}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data() {
        return {detailsAreVisible : false,
            friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234567890',
                    email: 'manuel@localhost.com'
                }}
    },
    methods:
    {
    toggleDetailsAreVisible()
    {
        this.detailsAreVisible = !this.detailsAreVisible;
    }
    }


});


app.mount("#app");