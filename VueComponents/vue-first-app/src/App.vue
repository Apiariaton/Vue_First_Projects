<template>
    <section>
    <h2>My Friends</h2>
    <ul>
    <li></li>      
    </ul>
    </section>
</template>


<script>
export default {
    data(){
        return {
            friends: [
            {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123456789',
                email: 'manuel@localhost.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '987654321',
                email: 'julie@localhost.com'
            }
            ]
        }
    }
};
</script>