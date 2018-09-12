<template>

    <div id="main-table">
        <table class="mt-4 table table-fixed" responsive hover>
            <thead class="thead-dark">
            <tr>
                <th v-for="item in headerArray">{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mem in senator">
                <td>{{mem.fullname}}</td>
                <td>{{mem.party}}</td>
                <td>{{mem.state}}</td>
                <td>{{mem.seniority}}</td>
                <td>{{mem.votes_with_party_pct}}%</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DataTable",
        data () {
            return {
                headerArray: ['Full Name', 'Party', 'State', 'Seniority', 'Percentage of vote']}
        },
        props: {
            senator: {
                type: Array,
                required: true,
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table-fixed tbody {
        height: 400px;
        overflow-y: auto;
        width: 100%;
    }
    .table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {
        display: block;
    }
    .table-fixed tr:after {
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
    }
    .table-fixed tbody td, .table-fixed thead > tr > th {
        float: left;
        width: 20%;
    }
    .table-fixed thead :focus {
        outline: none;
    }
</style>