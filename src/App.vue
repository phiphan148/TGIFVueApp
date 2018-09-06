<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    export default {
        components: {Header, Footer},
        data(){
            return {
                senatorA: [],
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
                        this.senatorA = data.results[0].members;
                        this.senatorA.forEach(mem => {
                            mem.fullname = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, '');
                        });
                        this.$store.state.senator = this.senatorA;
                        console.log(this.$store.state.senator);
                    });
            }
        },
    }
</script>
<style>

</style>
