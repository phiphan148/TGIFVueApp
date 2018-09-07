<template>
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <h5>Most Engaged (Top 10% of most votes with party)</h5>
            <table v-if="attendance == true" class="table table-bordered mt-3 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th v-for="label in TopTableHeader">{{label}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mem in TopTableBody">
                    <td>{{mem.fullname}}</td>
                    <td>{{mem.missed_votes}}</td>
                    <td>{{mem.missed_votes_pct}}</td>
                </tr>
                </tbody>
            </table>
            <table v-else class="table table-bordered mt-3 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th v-for="label in TopTableHeaderL">{{label}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mem in TopTableBody">
                    <td>{{mem.fullname}}</td>
                    <td>{{Math.round(((mem.total_votes - mem.missed_votes) * mem.votes_with_party_pct) / 100)}}</td>
                    <td>{{mem.votes_with_party_pct}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="col-lg-6 col-md-12">
            <h5>Least Engaged (Top 10% of least votes with party)</h5>
            <table v-if="attendance == true" class="table table-bordered mt-3 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th v-for="label in TopTableHeader">{{label}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mem in BottomTableBody">
                    <td>{{mem.fullname}}</td>
                    <td>{{mem.missed_votes}}</td>
                    <td>{{mem.missed_votes_pct}}</td>
                </tr>
                </tbody>
            </table>
            <table v-else class="table table-bordered mt-3 table-hover">
                <thead class="thead-dark">
                <tr>
                    <th v-for="label in TopTableHeaderL">{{label}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mem in BottomTableBody">
                    <td>{{mem.fullname}}</td>
                    <td>{{Math.round(((mem.total_votes - mem.missed_votes) * mem.votes_with_party_pct) / 100)}}</td>
                    <td>{{mem.votes_with_party_pct}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticsTable",
        data() {
            return {
                attendance: false,
                loyalty: false,
                senator: [],
                TopTableHeader: ['Full name', 'Number of missed votes', 'Percent missed votes'],
                TopTableHeaderL: ['Full name', 'Number of party votes', 'Percent party votes'],
                TopTableBody: [],
                BottomTableBody: [],
            }
        },
        created: function () {
            this.getData();
        },
        methods: {
            getData() {
                let pathSenate = 'senate';
                let url = '';
                let currentPage = window.location.href;
                if (currentPage.includes(pathSenate)) {
                    url = 'https://api.myjson.com/bins/1eja30';

                } else {
                    url = 'https://api.myjson.com/bins/j83do';
                }
                fetch(url)
                    .then(response => response.json())
                    .then((jsonData) => {
                        let data = jsonData;
                        this.senator = data.results[0].members;
                        this.senator.forEach(mem => {
                            mem.fullname = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, '');
                        });

                        if (currentPage.includes('attendance')) {
                            this.attendance = true;
                            this.senator = this.senator.sort(function (a, b) {
                                return a.missed_votes - b.missed_votes
                            });
                            this.getCalculation(this.senator, this.TopTableBody);
                            this.senator = this.senator.sort(function (a, b) {
                                return b.missed_votes - a.missed_votes
                            });
                            this.getCalculation(this.senator, this.BottomTableBody);
                        } else {
                            this.loyalty = true;
                            this.senator = this.senator.sort(function (a, b) {
                                return b.votes_with_party_pct - a.votes_with_party_pct
                            });
                            this.getCalculation(this.senator, this.TopTableBody);
                            this.senator = this.senator.sort(function (a, b) {
                                return a.votes_with_party_pct - b.votes_with_party_pct
                            });
                            this.getCalculation(this.senator, this.BottomTableBody);
                        }
                    });
            },
            getCalculation: function (array,statisticsTable) {
                for (let i = 0; i < array.length * 0.1; i++) {
                    statisticsTable.push(array[i])
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>