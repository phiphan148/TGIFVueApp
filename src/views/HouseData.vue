<template>
    <div class="card-body container">
        <h2>Congressmen</h2>
        <p>The major power of the House is to pass federal legislation that affects the entire country, although its
            bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless
            both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The House
            has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials
            are subsequently tried in the Senate), and to elect the U.S. President in case there is no majority in the
            Electoral College.</p>
        <p>Each U.S. state is represented in the House in proportion to its population as measured in the census, but
            every state is entitled to at least one representative. </p>
        <div id="main-table">
            <FilterData></FilterData>
        </div>
    </div>
</template>

<script>
    import FilterData from "../components/FilterData";
    export default {
        name: "HouseData",
        components: {FilterData},
        beforeCreate(){
          this.$parent.$parent.getData();
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
