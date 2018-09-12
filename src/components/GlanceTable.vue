<template>
    <div>
        <table class="table table-bordered mt-3">
            <thead class="thead-dark">
            <tr>
                <th v-for="label in statisticsGlanceHeader">{{label}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getStatisticsGlance">
                <td>{{ item.label}}</td>
                <td>{{ item.Partyinfo.Memnum}}</td>
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
                statisticsOject: {
                    info: [{label: 'Democrats', Partyinfo: {party: 'D', Memnum: 0, PctVotes: 0,}},
                        {label: 'Republicants', Partyinfo: {party: 'R', Memnum: 0, PctVotes: 0,}},
                        {label: 'Independents', Partyinfo: {party: 'I', Memnum: 0, PctVotes: 0,}},
                        {label: 'Total', Partyinfo: {party: '', Memnum: 0, PctVotes: 0,}}]
                }
            }
        },
        props: {
            memberData: {
                type: Array,
                required: true,
            },
        },
        computed: {
            getStatisticsGlance() {
                let that = this;
                that.statisticsOject.info[0].Partyinfo.Memnum = 0;
                that.statisticsOject.info[1].Partyinfo.Memnum = 0;
                that.statisticsOject.info[2].Partyinfo.Memnum = 0;
                this.memberData.forEach(function (mem) {
                    switch (mem.party) {
                        case "D":
                            that.statisticsOject.info[0].Partyinfo.Memnum++;
                            that.statisticsOject.info[0].Partyinfo.PctVotes += mem.votes_with_party_pct;
                            break;
                        case "R":
                            that.statisticsOject.info[1].Partyinfo.Memnum++;
                            that.statisticsOject.info[1].Partyinfo.PctVotes += mem.votes_with_party_pct;
                            break;
                        case "I":
                            that.statisticsOject.info[2].Partyinfo.Memnum++;
                            that.statisticsOject.info[2].Partyinfo.PctVotes += mem.votes_with_party_pct;
                            break;
                    }
                });
                that.statisticsOject.info[3].Partyinfo.PctVotes = that.statisticsOject.info[0].Partyinfo.PctVotes + that.statisticsOject.info[1].Partyinfo.PctVotes + that.statisticsOject.info[2].Partyinfo.PctVotes;
                for (let i = 0; i < that.statisticsOject.info.length - 1; i++) {
                    if (that.statisticsOject.info[i].Partyinfo.Memnum == 0) {
                        that.statisticsOject.info[i].Partyinfo.PctVotes = 0;
                    } else {
                        that.statisticsOject.info[i].Partyinfo.PctVotes = +Number.parseFloat(that.statisticsOject.info[i].Partyinfo.PctVotes / that.statisticsOject.info[i].Partyinfo.Memnum).toFixed(2);
                    }
                }
                that.statisticsOject.info[3].Partyinfo.Memnum = that.statisticsOject.info[0].Partyinfo.Memnum + that.statisticsOject.info[1].Partyinfo.Memnum + that.statisticsOject.info[2].Partyinfo.Memnum;
                that.statisticsOject.info[3].Partyinfo.PctVotes = +Number.parseFloat(that.statisticsOject.info[3].Partyinfo.PctVotes / that.statisticsOject.info[3].Partyinfo.Memnum).toFixed(2);
                return this.statisticsOject.info;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
