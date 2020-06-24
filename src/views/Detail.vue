<template>
    <div>
        {{title}}
    </div>
</template>

<script>
export default {
    name:'detail',
    computed:{
        title() {
            return this.$store.getters.title
        }
    }
}
</script>

<style>

</style>