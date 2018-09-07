<template>
    <div class="filter-all-data">
        <div class="row">
            <div class="row col-lg-7 col-md-12 col-sm-12 col-12 mt-2">
                <span class="col"><input type="checkbox" v-model="checkarr" value="D"/> Democrat</span>
                <span class="col"><input type="checkbox" v-model="checkarr" value="R"/> Repbulic</span>
                <span class="col"><input type="checkbox" v-model="checkarr" value="I"/> Independent</span>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12 col-9 mt-2">
                <select class="container-fluid" v-model="selectarr">
                    <option value=''>Choose state</option>
                    <option v-for="state in statearr">{{state}}</option>
                </select>
            </div>
            <div class="input-group col-lg-3 col-md-6 col-sm-12 col-9">
                <input v-model="searchName" id="search-data" class="form-control py-2" type="search"
                placeholder="Search name">
                <span class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                <i class="fa fa-search"></i>
                </button>
                </span>
            </div>
        </div>
        <DataTable v-bind:senator="displayParty"></DataTable>
    </div>
</template>

<script>
    import DataTable from './DataTable'
    export default {
        name: "FilterData",
        components: {DataTable},
        data () {
            return {
                senatorF: [],
                checkarr: [],
                selectarr: '',
                statearr: [],
                searchName: '',
                tempt: [],
            }
        },
        created: function(){
            this.getData();
        },
        computed: {
            displayParty() {
                if (this.checkarr.length == 0 && this.selectarr == '') {
                    return this.searchData(this.senatorF);
                } else if (this.checkarr.length != 0 && this.selectarr == '') {
                    this.tempt = this.senatorF.filter(j => this.checkarr.includes(j.party));
                    return this.searchData(this.tempt);
                } else if (this.selectarr != '' && this.checkarr.length == 0) {
                    this.tempt = this.senatorF.filter(j => this.selectarr.includes(j.state));
                    return this.searchData(this.tempt)
                } else {
                    let  memFilter= [];
                    for (let j = 0; j < this.senatorF.length; j++) {
                        for (let i = 0; i < this.checkarr.length; i++) {
                            if (this.senatorF[j].party == this.checkarr[i] && this.senatorF[j].state == this.selectarr) {
                                memFilter.push(this.senatorF[j]);
                            }
                        }
                    }
                    return this.searchData(memFilter);
                }
            },
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
                        this.senatorF = data.results[0].members;
                        this.senatorF.forEach(mem => {
                            mem.fullname = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, '');
                        });
                        this.getStates();
                    });
            },
            getStates: function () {
                console.log(this.senatorF)
                this.senatorF.forEach(mem => {
                    if (!this.statearr.includes(mem.state)) {
                        this.statearr.push(mem.state);
                        console.log('addrow')
                    }
                });
            },
            searchData: function(array){
                return array.filter(mem => mem.fullname.toLowerCase().includes(this.searchName.toLowerCase()) || mem.votes_with_party_pct.toString().includes(this.searchName.toLowerCase()))
            }
        },
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
