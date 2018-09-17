<template>
    <div class="card-body container">
        <h2>Senators</h2>
        <p>First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S.
            Constitution. Each state is represented by two senators, regardless of population, who serve staggered
            six-year
            terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties
            as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries,
            federal judges, other federal executive officials, military officers, regulatory officials, ambassadors,
            and other federal uniformed officers, as well as trial of federal officials impeached by the House.</p>
        <div id="main-table">
            <FilterData></FilterData>
        </div>
    </div>
</template>

<script>
    import DataTable from "../components/DataTable";
    import FilterData from "../components/FilterData";

    export default {
        name: "SenateData",
        components: {DataTable, FilterData},
        data(){
            return {

            }
        },
        beforeCreate(){
          this.$parent.$parent.getData();
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
