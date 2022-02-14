<template>
    <div style="background-color : green;">
        <h2> {{ title }} </h2>
        <h2> {{ user.name }}</h2>
        <h2> {{ user.age }}</h2>
        <h2> {{ getDateAndTime(date)}} </h2>
    </div>
</template>
<script>
import { dateFormat } from "./mixins/dateFormat"

export default {
    data : () => ({
        title : "Good!",
        user : {
            name : 'status',
            age : 25
        },
        date : null
    }),
    created() {
        this.date = new Date()
    },
    mounted() {
        this.emitter.on('sibling', user => {
            this.user.name = user.name
            this.user.age = user.age
        })
    },
    methods : {
        
    },
    mixins : [dateFormat]
}
</script>
