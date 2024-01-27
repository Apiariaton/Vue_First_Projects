<template>
<div class="form_container">
<div class="new_friend_form">
<h3>New Friend Form</h3>

<form @submit.prevent="addNewFriendToFriends()">

<label for="friend-id">Friend ID </label>
<input type="text" name="friend-id" v-model="newFriend.id"/>

<label for="friend-name">Friend Name </label>
<input type="name" name="friend-name" v-model="newFriend.name"/>

<label for="friend-phone">Friend Phone </label>
<input type="tel" name="friend-phone" v-model="newFriend.phone"/>

<label for="friend-email">Friend Email</label>
<input type="email" name="friend-email" v-model="newFriend.email"/>

<label for="friend-isFavourite">Friend is a favourite?</label>
<input type="checkbox" name="friend-isFavourite" v-model="newFriend.isFavourite"/>

<button type="submit">Add New Friend</button>
</form>
</div>
</div>
</template>




<script>
export default {
    data(){
        return {
            newFriend: {
                id: null,
                name: null,
                phone: null,
                email:null,
                isFavourite: null
            },
        }
    },
    emits: [
        "add-new-friend-to-friends"
    ],
    methods: {
        addNewFriendToFriends(){
            this.$emit("add-new-friend-to-friends",this.newFriend);
        }
    },
};
</script>

<style>
.form_container {
    display:flex;
    justify-content: center;
    align-items: center;

}

.new_friend_form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:10rem;
    height: 20rem;
    margin-bottom:5rem;
}

input[type="text"],
input[type="checkbox"] {
    margin-top: 1rem;
}

label {
    margin-top: 1rem;
}
</style>