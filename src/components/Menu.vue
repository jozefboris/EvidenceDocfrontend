<template>


    <div class="container-fluid">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand " href="http://localhost:8081/#/Main">
                <button class="btn2"><i class="fa fa-home"></i> Home</button>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav selected">

                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:8081/#/main">Dokumenty</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:8081/#/">Zamestnanci</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:8081/#/main">Profil</a>
                    </li>


                </ul>

            </div>




            <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">

                <ul class="navbar-nav" >
                    <legend style="margin-right:1.5em">{{stats}}  </legend>

                    <li class="nav-item">
                        <form action="http://localhost:8081/#/">
                            <button type="submit" class="btn btn-secondary" @click="logOut()" >

                                <span class="glyphicon glyphicon-log-out"></span> Log out
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                            </button>
                        </form>

                    </li>
                </ul>
            </div>



        </nav>
    </div>

</template>

<script>


    export default {

        data(){
            return{
                stats:"",

            }
        },
        methods:{
            reload(){
                this.stats = sessionStorage.getItem("login");
                if( sessionStorage.getItem("login") == "") {
                    window.location.replace("http://localhost:8081/#/");


                }



            },


            logOut() {
                sessionStorage.setItem("login",  "");
            }

        },

        mounted(){
            this.reload();
        },









    }


</script>

<style>
    .btn2 {
        background-color: DodgerBlue;
        border: none;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
    }

    /* Darker background on mouse-over */
    .btn2:hover {
        background-color: RoyalBlue;
    }

    .selected {
        font-weight: bold;
    }


</style>