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
        ],
        detailsAreVisible : false
    }
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