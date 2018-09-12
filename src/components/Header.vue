<template>
    <div class="header">
        <div>
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <div class="col-1 img-home">
                        <router-link class="" to="/"><img class="img-fluid" src="../assets/logo.png" alt="logo"></router-link>
                    </div>
                    <div class="col-1 align-self-center">
                        <router-link class="text-body" to="/">TGIF</router-link>
                    </div>
                    <div class="col text-right align-self-center">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a class="ml-1">Email</a>
                    </div>
                </div>
            </div>
            <nav class="card-header navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto black">
                        <li class="nav-item">
                            <router-link class="nav-link text-body" to="/">Home</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-body" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Congress
                                113
                            </a>
                            <span class="caret"></span>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link :key class="dropdown-item" to="/senate-data">Senate</router-link>
                                <router-link :key class="dropdown-item" to="/house-data">House</router-link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-body" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Attendance</a>
                            <span class="caret"></span>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/senate-attendance">Senate</router-link>
                                <router-link class="dropdown-item" to="/house-attendance">House</router-link>
                                <!--<a class="dropdown-item" href="./senate-attendance">Senate</a>-->
                                <!--<a class="dropdown-item" href="./house-attendance">House</a>-->
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-body" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Party
                                Loyalty
                            </a>
                            <span class="caret"></span>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/senate-loyalty">Senate</router-link>
                                <router-link class="dropdown-item" to="/house-loyalty">House</router-link>
                                <!--<a class="dropdown-item" href="./senate-party-loyalty.html">Senate</a>-->
                                <!--<a class="dropdown-item" href="./house-party-loyalty.html">House</a>-->
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 768px) {
  .img-home {
    display: none;
  }
}
</style>
