<template>
    <div style="background-color : white; margin : 5px; ">
        <!-- <AppStatus></AppStatus> -->
        <h1> {{user.name}} </h1>
        <h1> {{user.age}} </h1>
        <v-text-field
            label="Regular"
            placeholder="Placeholder"
            v-model="user.name"
          ></v-text-field>
        <v-text-field
            label="Regular"
            placeholder="Placeholder"
            v-model="user.age"
          ></v-text-field>
        <v-btn @click="changeName2">부모-자식 Name 수정</v-btn>
    </div>
</template>
<script>
export default {
    props : // ["nameOfChild"],
    {
        name : {
            type : String
        },
        age : {
            type : Number
        }
        /*nameOfChild : {
            type : String,
            default : "VUE",
            required : true
        }*/
    },
    data : ()=>({
        user : {}
    }),
    created () {
        this.user.name = this.name
        this.user.age = this.age
    },
    methods : {
        changeName2 () {
            this.$emit('child', this.user)
        }
    },
}
</script>
