<template>
    <div>
        <div class="alert alert-info">
            <div class="row" v-for="person in persons">
                <!-- TODO datum a poznamka -->
                <div class="col-6">
                    <h4>{{person.first_name}} {{person.last_name}}</h4>
                    <p>Narozen(a): {{person.birth_day}}</p>
                </div>
                <!-- TODO kdo rezervoval -->
                <div class="col-4">
                    <span class="glyphicon glyphicon-scale"></span> {{person.weight}} kg
                    <br />
                    <span class="glyphicon glyphicon-resize-vertical"></span> {{person.height}} cm
                    <br />
                    <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:jan@pokus.test">j{{person.email}}</a>
                </div>
                <!-- TODO smazat -->
                <div class="col-2">
                    <button class="btn btn-danger btn-block" @click="delPer(person.id)">
                        <span class="glyphicon glyphicon-remove"></span> Smazat
                    </button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {

        mounted(){
            this.updateList();
        },


        data() {
            return {
                persons: [],
            }
        },

        methods: {
            updateList(){
                this.$http.get('persons').then((response)=> {
                    this.persons = response.data;
                });
            },
            delPer(id) {
                this.$http.delete('persons/'+id, {
                }).then((response) => {
                    alert('Osoba vymazana');
                    this.updateList()
                }, () => {
                    alert('Mazani osoby selhalo')
                });
            }
        }





    }
</script>