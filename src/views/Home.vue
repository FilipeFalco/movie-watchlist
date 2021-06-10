<template>
    <v-container class="login--container">
        <v-row
        justify="center"
        no-gutters
        fill-height
        >
            <v-col md="5">
                <v-card
                elevation="0"
                class="pa-4"
                >
                    <v-card-title class="pa-0 mb-6 text-center">Entrar</v-card-title>
                    <form-login 
                        @login="loginWithFirebase"
                    />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
import firebase from 'firebase';
import { mapActions } from 'vuex';

export default {
    name: 'Home',
    components: {
        FormLogin
    },
    methods: {
        goTo(name) {
            this.$router.push({ name: name })
        },

        ...mapActions(['AddUser']),

        loginWithFirebase(user) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then(data => {
                    this.addUser({
                        name: data.user.displayName,
                        email: data.user.email
                    })
                    this.$router.push({ name: 'dashboard' });
                })
                .catch(err => {
                    this.error = err.message;
                });
        }
    }
}
</script>