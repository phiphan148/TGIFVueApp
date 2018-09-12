<template>
    <div>
        <h5>Most Engaged (Top 10% of most votes with party)</h5>
        <table class="table table-bordered mt-3 table-hover">
            <thead class="thead-dark">
            <tr>
                <th v-for="label in TopTableHeader" :key="label">{{label}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mem in getTop" :key="mem.fullname">
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
        name: "TopTable",
        data() {
            return {
                TopTableHeader: ['Full name', 'Number of missed votes', 'Percent of missed votes'],
                TopTableBody: [],
            }
        },
        props: {
            senatorT: {
                type: Array,
                required: true,
            },
        },
        computed:{
          getTop(){
              let length = this.senatorT.length * 0.1;
              return this.senatorT.slice(0, length).sort(function (a, b) {
                  return a.missed_votes - b.missed_votes
              });
          }
        }
    };
</script>
