<template>
    <li>
        <h2>{{ name }} {{ isFavouriteFriend ? "(Favourite)" : ""}}</h2>
        <button @click="toggleDetailsAreVisible"> {{detailsAreVisible ? "Hide Details" : "Show Details"}}</button>
        <button @click="toggleFavouriteFriend">{{ isFavouriteFriend ? "Unfavourite this friend" : "Favourite this friend"}}</button>
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
        id: {
            type: String,
            required:true
        },
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
    emits: 
    [{"toggle-favourite-friend": function(id){
        if (!id)
        {
            return true;
        }
        else {
            console.warn("An id needs to be provided to the function which is called with toggle-favourite-friend")
        }
    }}],
    data(){
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetailsAreVisible(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavouriteFriend()
        {
            this.$emit('toggle-favourite-friend',this.id);
            // this.isFavourite = !this.isFavourite;
        }
    }

};
</script>
