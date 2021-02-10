<template>
    <div class="card">
        <div class="card-body bg-light">
            Průměrná váha osob: <strong>{{stats.weight.round}}</strong> kg
            <br />
            Průměrná výška osob: <strong>{{stats.height.round}}</strong> cm
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                stats:[]
            }
        },
        methods:{
            reload(){
                this.$http.get('stats').then((response)=>{
                    this.stats = response.data;
                });
            }
        },
        mounted(){
            this.reload();
        }

    }
</script>
