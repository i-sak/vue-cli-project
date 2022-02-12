<template>
    <div style="background-color : yellow; margin : 5px; ">
        <!-- <AppStatus></AppStatus> -->
        <h1> {{ nameOfChild }} </h1>
    </div>
</template>
<script>
export default {
    props : ["nameOfChild"],
    data : ()=>({
        
    })
}
</script>
