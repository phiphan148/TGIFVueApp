import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import SenateData from "./components/SenateData.vue";
import HouseData from "./components/HouseData.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/senate-data",
            name: "senate",
            component: SenateData
        },
        {
            path: "/house-data",
            name: "house-data",
            component: HouseData,
        },
    ]
});
