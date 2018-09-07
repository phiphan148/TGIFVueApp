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
                <h5>House at a glance</h5>
                <GlanceTable></GlanceTable>
            </div>
        </div>
        <hr>
        <StatisticsTable></StatisticsTable>
    </div>
</template>

<script>
    import GlanceTable from "./GlanceTable";
    import StatisticsTable from "./StatisticsTable";

    export default {
        name: "HouseLoyalty",
        components: {GlanceTable, StatisticsTable},
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
