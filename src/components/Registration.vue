<template>
    <div class="wrapper">

    <form @submit.prevent="addReg"  class="form-signin">

        <fieldset>
                    <h2 class="form-signin-heading" style="color:#A8A6A6">Registrujte se</h2>
                <input type="text" class="form-control" v-model="login" name="login" placeholder="Login" autofocus=""   required />
                <br/>
                <input type="password" class="form-control" name="pass1"   v-model="password" placeholder="Password" required  />
                <br/>
                <input type="password" class="form-control" name="pass2"  v-model="password2" placeholder="Password" required />
                <br/>
            <!-- TODO zobrazit chybu pri problemu -->
            <p class="alert alert-danger" v-if="chyba">
                Login uz existuje.
            </p>

            <p class="alert alert-danger" v-if="errorPass">
                Hesla sa nezhoduju.
            </p>

            <p class="alert alert-success" v-if="succesReg">

                Registrace uspesna.

            </p>

            <button  class="btn btn-lg btn-primary btn-block"  type="submit">Registrovat se</button>

        </fieldset>

    </form>

    </div>


</template>

<script>
    export default {

        data() {
            return {
                login: '',
                password: '',
                password2: '',
                chyba:false,
                errorPass:false,
                succesReg:false
            }
        },
        methods: {
            addReg() {

                if (!this.login || !this.password || !this.password2) {
                    this.chyba = true;
                } else if (this.password != this.password2) {
                    this.errorPass = true;
                    this.succesReg = false
                    this.chyba = false

                } else {
                    this.chyba = false;
                this.$http.post('account', {
                    login: this.login,
                    password: this.password,
                    password2: this.password2,

                }).then((response) => {
                    this.chyba = false;
                    this.login = '';
                    this.password = '';
                    this.password2 = '';

                    this.chyba = false
                    this.errorPass = false
                    this.succesReg=true
                    window.location.replace("http://localhost:8081/#/");
                    this.$emit("new");
                }).catch((error) => {
                    this.chyba = true;
                    this.errorPass = false
                    this.succesReg = false
                });
              }
            }
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
        border: 1px solid rgba(0,0,0,0.1);
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


</style>