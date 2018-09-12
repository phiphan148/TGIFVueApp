<template>
    <div class="card-body container" style="height: 100%">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h2>Party Loyalty</h2>
                <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans
                    respectively,
                    tend to be the most faithful in voting for their party's nominee for office and legislation that
                    backs their party's agenda.</p>
            </div>
            <div class="col-lg-6 col-md-12">
                <h5>Senate at a glance</h5>
                <GlanceTable v-bind:memberData="senator"></GlanceTable>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <TopTableLoyalty v-bind:senatorT="senator"></TopTableLoyalty>
            </div>
            <div class="col-lg-6 col-md-12">
                <BottomTableLoyalty v-bind:senatorB="senator"></BottomTableLoyalty>
            </div>
        </div>
    </div>
</template>

<script>
    import GlanceTable from "./GlanceTable";
    import TopTableLoyalty from "./TopTableLoyalty";
    import BottomTableLoyalty from "./BottomTableLoyalty";

    export default {
        name: "SenateLoyalty",
        components: {GlanceTable, TopTableLoyalty, BottomTableLoyalty},
        beforeCreate(){
            this.$parent.$parent.getData();
        },
        computed: {
            senator() {
                return this.$store.state.senator;
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
