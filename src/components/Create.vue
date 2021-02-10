<template>
    <form @submit.prevent="addPers">
        <fieldset>
            <legend>Založit nový dokument</legend>

            <label class="mandatory">Název</label>
            <input class="form-control" type="text" v-model="first_name" required />
            <br />

            <label class="mandatory">Přípona</label>
            <input class="form-control" type="text" v-model="last_name" required />
            <br />

            <label class="mandatory">Email</label>
            <input class="form-control" type="email" v-model="email" required />
            <br />

            <label class="mandatory">Datum založení:</label>
            <input class="form-control" type="date" v-model="birth_day" required />
            <br />

            <label>Verze </label>
            <input class="form-control" type="number" v-model="height" />
            <br />

            <label>Sériové číslo</label>
            <input class="form-control" type="number" v-model="weight" />
            <br />

            <label class="mandatory">Pohlaví</label>
            <select class="form-control" v-model="gender">
                <option value="m">Muž</option>
                <option value="f">Žena</option>
            </select>
            <br />

            <!-- TODO zobrazit chybu pri problemu -->
            <p class="alert alert-danger" v-if="chyba">
                Chyba při vytváření zaznamu.
            </p>

            <input class="btn btn-success" type="submit" value="Přidat" />
        </fieldset>
    </form>
</template>

<script>
    export default {

        data() {
            return {
                first_name: '',
                last_name: '',
                birth_day: '',
                height: '',
                weight: '',
                gender: '',
                email: '',
                chyba:false
            }
        },
        methods: {
            addPers() {
                if (!this.first_name || !this.last_name || !this.email || !this.birth_day) {
                    alert('Pridani osoby se nezdarilo');
                    this.chyba = true;
                } else {
                        this.chyba = false;
                    }
                    this.$http.post('persons', {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        birth_day: this.birth_day,
                        height: this.height,
                        weight: this.weight,
                        gender: this.gender,
                        email: this.email
                    }).then((response) => {
                        this.chyba = false;
                        this.first_name = '';
                        this.last_name = '';
                        this.birth_day = '';
                        this.height = '';
                        this.weight = '';
                        this.gender = '';
                        this.email = '';
                        alert('Osoba pridana');
                        this.$emit("new");
                    }).catch((error) => {
                        alert('Pridani osoby se nezdarilo');
                        this.chyba = true;
                    });

            }
        }


    }
</script>