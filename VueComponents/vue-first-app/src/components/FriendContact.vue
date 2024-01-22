<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? "(Favourite)" : ""}}</h2>
        <button @click="toggleDetailsAreVisible"> {{detailsAreVisible ? "Hide Details" : "Show Details"}}</button>
        <button @click="toggleFavouriteFriend">{{ isFavourite ? "Unfavourite this friend" : "Favourite this friend"}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{emailAddress }} </li>
        </ul>
    </li>
</template>


<script>
export default {
    //props: ['name','phoneNumber','emailAddress'],
    // props: {
    //     name: String, 
    //     phoneNumber: String,
    //     emailAddress: String,
    // },
    props: 
    {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavouriteFriend: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value) {
            //     return value === true || value === false;
            // }
        }
    },
    data(){
        return {
            detailsAreVisible: false,
            isFavourite: this.isFavouriteFriend,
        }
    },
    methods: {
        toggleDetailsAreVisible(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavouriteFriend()
        {
            this.isFavourite = !this.isFavourite;
        }
    }

};
</script>
