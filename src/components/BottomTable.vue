<template>
    <div>
            <h5>Least Engaged (Top 10% of least votes with party)</h5>
            <table class="table table-bordered mt-3 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th v-for="label in TopTableHeader">{{label}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mem in getDataBottom">
                    <td>{{mem.fullname}}</td>
                    <td>{{mem.missed_votes}}</td>
                    <td>{{mem.missed_votes_pct}}</td>
                </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    export default {
        name: "BottomTable",
        data() {
            return {
                TopTableHeader: ['Full name', 'Number of missed votes', 'Percent missed votes'],
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
                  return b.missed_votes - a.missed_votes
              });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
