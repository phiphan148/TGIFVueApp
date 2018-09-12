<template>
    <div class="card-body container" style="height: 100%">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h2>Attendance</h2>
                <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each
                    house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls;
                    thus, in most cases, debates continue even if a majority is not present.</p>
                <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating
                    "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the most
                    formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members
                    vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the
                    Vice President may (if present) cast the tiebreaking vote.</p>
            </div>
            <div class="col-lg-6 col-md-12">
                <h5>House at a glance</h5>
                <GlanceTable v-bind:memberData="senator"></GlanceTable>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <TopTable v-bind:senatorT="senator" ></TopTable>
            </div>
            <div class="col-lg-6 col-md-12">
                <BottomTable v-bind:senatorB="senator"></BottomTable>
            </div>
        </div>
    </div>
</template>

<script>
    import GlanceTable from "./GlanceTable";
    import TopTable from "./TopTable";
    import BottomTable from "./BottomTable";

    export default {
        name: "HouseAttendance",
        components: {GlanceTable, TopTable, BottomTable},
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
