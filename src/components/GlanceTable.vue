<template>
    <div>
        <table class="table table-bordered mt-3">
            <thead class="thead-dark">
            <tr>
                <th v-for="label in statisticsGlanceHeader">{{label}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in statisticsGlance.info">
                <td>{{ item.label }}</td>
                <td>{{ item.Partyinfo.Memnum }}</td>
                <td>{{ item.Partyinfo.PctVotes }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "GlanceTable",
        data() {
            return {
                statisticsGlanceHeader: ['Party', 'Number of members', 'Percent of votes'],
                statisticsGlance: {},
            }
        },
        created: function () {
            this.getData();
        },
        computed: {
            memberData() {
                return this.$store.state.senator;
            }
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
                        this.$store.state.senator = data.results[0].members;
                        this.$store.state.senator.forEach(mem => {
                            mem.fullname = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, '');
                        });
                        this.getStatisticsGlance();
                    });
            },
            getStatisticsGlance: function () {
                let statisticsOject = {
                    info: [{label: 'Democrats', Partyinfo: {party: 'D', Memnum: 0, PctVotes: 0,}},
                        {label: 'Republicants', Partyinfo: {party: 'R', Memnum: 0, PctVotes: 0,}},
                        {label: 'Independents', Partyinfo: {party: 'I', Memnum: 0, PctVotes: 0,}},
                        {label: 'Total', Partyinfo: {party: '', Memnum: 0, PctVotes: 0,}}]
                };
                this.memberData.forEach(mem => {
                    for (let i = 0; i < statisticsOject.info.length; i++) {
                        if (mem.party === statisticsOject.info[i].Partyinfo.party) {
                            statisticsOject.info[i].Partyinfo.Memnum += 1;
                            statisticsOject.info[i].Partyinfo.PctVotes += mem.votes_with_party_pct;
                        }
                    }
                })
                for (let j = 0; j < statisticsOject.info.length - 1; j++) {
                    if (statisticsOject.info[j].Partyinfo.Memnum != 0) {
                        statisticsOject.info[statisticsOject.info.length - 1].Partyinfo.Memnum += statisticsOject.info[j].Partyinfo.Memnum;
                        statisticsOject.info[statisticsOject.info.length - 1].Partyinfo.PctVotes += statisticsOject.info[j].Partyinfo.PctVotes;
                        statisticsOject.info[j].Partyinfo.PctVotes = +Number.parseFloat(statisticsOject.info[j].Partyinfo.PctVotes / statisticsOject.info[j].Partyinfo.Memnum).toFixed(2);
                    } else {
                        statisticsOject.info[j].Partyinfo.PctVotes = 0;
                    }
                }
                statisticsOject.info[statisticsOject.info.length - 1].Partyinfo.PctVotes = +Number.parseFloat(statisticsOject.info[statisticsOject.info.length - 1].Partyinfo.PctVotes / statisticsOject.info[statisticsOject.info.length - 1].Partyinfo.Memnum).toFixed(2);
                this.statisticsGlance = statisticsOject;
                console.log('addrow')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>