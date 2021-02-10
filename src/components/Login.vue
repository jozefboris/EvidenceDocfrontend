<template>

    <div class="container-fluid">
        <Menu></Menu>



    <div class="wrapper">

        <form @submit.prevent="addReg"  class="form-signin">

            <fieldset>
                <h2 class="form-signin-heading" style="color:#A8A6A6">Prihlásit se</h2>
                <input type="text" class="form-control" v-model="login" name="login" placeholder="Login" autofocus=""   required />
                <br/>
                <input type="password" class="form-control" name="pass1"   v-model="password" placeholder="Password" required  />
                <br/>

                <!-- TODO zobrazit chybu pri problemu -->
                <p class="alert alert-danger" v-if="chyba">

                    1
                </p>

                <p class="alert alert-danger" v-if="chyba2">

                    Špatné prihlasovací údaje
                </p>

                <p class="alert alert-danger" v-if="chyba3">

                    3
                </p>


                <button  class="btn btn-lg btn-primary btn-block"  type="submit">Prihlasiť se </button>
                <br/>
                <form action="http://localhost:8081/#/Registration">
                <button  class="btn btn-lg btn-primary btn-block"  type="submit">Registrovat se</button>
                </form>
            </fieldset>

        </form>

    </div>

    </div>

</template>

<script>
    import Menu from "./Menu";
    export default {
        components: {'Menu': Menu
        },
        data() {
            return {
                login: '',
                password: '',
                chyba:false,
                chyba2:false,
                chyba3:false,
                stats:''
            }
        },
        methods: {
            addReg() {

                if (!this.login || !this.password) {
                    this.chyba = true;
                }  else {
                    this.$http.post('login', {
                        login: this.login,
                        password: this.password,

                    }).then((response) => {
                        this.login = '';
                        this.password = '';
                        this.stats = response.data;
                        sessionStorage.setItem("login",  this.stats);
                        if(this.stats != "False") {

                            window.location.replace("http://localhost:8081/#/Main");
                        } else {

                            this.chyba2 = true;
                        }
                        this.$emit("new");
                    }).catch((error) => {
                        this.chyba3 = true;
                    });
                }
            }
        },


        mounted(){
            this.reload();
        }
    }


</script>

<style type='text/css'>

    .wrapper {
        margin-top: 80px;
        margin-bottom: 80px;
    }

    .form-signin {
        max-width: 450px;
        padding: 15px 45px 45px;
        margin: 0 auto;
        background-color: #1F1919;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .form-signin-heading,

    .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;


    }

    input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    input[type="password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

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
