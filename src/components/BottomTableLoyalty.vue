<template>
    <div>
        <h5>Most Engaged (Top 10% of most votes with party)</h5>
        <table class="table table-bordered mt-3 table-hover">
            <thead class="thead-dark">
            <tr>
                <th v-for="label in TopTableHeaderL">{{label}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mem in getDataBottom">
                <td>{{mem.fullname}}</td>
                <td>{{Math.round(((mem.total_votes - mem.missed_votes) * mem.votes_with_party_pct) / 100)}}</td>
                <td>{{mem.votes_with_party_pct}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "BottomTableLoyalty",
        data() {
            return {
                TopTableHeaderL: ['Full name', 'Number of party votes', 'Percent party votes'],
                BottomTableBody: [],
            }
        },
        props: {
            senatorB: {
                type: Array,
                required: true,
            },
        },
        computed: {
            getDataBottom() {
                let length = this.senatorB.length * 0.1;
                return this.senatorB.slice(0, length).sort(function (a, b) {
                    return a.votes_with_party_pct - b.votes_with_party_pct
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
