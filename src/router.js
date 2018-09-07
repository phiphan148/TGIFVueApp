import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import SenateData from "./components/SenateData.vue";
import HouseData from "./components/HouseData.vue";
import SenateAttendance from "./components/SenateAttendance.vue";
import SenateLoyalty from "./components/SenateLoyalty.vue";
import HouseLoyalty from "./components/HouseLoyalty.vue";
import HouseAttendance from "./components/HouseAttendance.vue";

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
        {
            path: "/senate-attendance",
            name: "senate-attendance",
            component: SenateAttendance,
        },
        {
            path: "/senate-loyalty",
            name: "senate-loyalty",
            component: SenateLoyalty,
        },
        {
            path: "/house-loyalty",
            name: "house-loyalty",
            component: HouseLoyalty,
        },
        {
            path: "/house-attendance",
            name: "house-attendance",
            component: HouseAttendance,
        },
    ]
});
