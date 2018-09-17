import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SenateData from "./views/SenateData.vue";
import HouseData from "./views/HouseData.vue";
import SenateAttendance from "./views/SenateAttendance.vue";
import SenateLoyalty from "./views/SenateLoyalty.vue";
import HouseLoyalty from "./views/HouseLoyalty.vue";
import HouseAttendance from "./views/HouseAttendance.vue";

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
