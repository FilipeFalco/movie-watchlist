<template>
    <v-container class="register--container">
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
                    <v-card-title class="pa-0 mb-6 text-center">Criar conta</v-card-title>
                    <form-register 
                        @register="createFirebaseUser"
                    />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormRegister from '../components/FormRegister.vue';
import firebase from 'firebase';

export default {
    name: 'Register',
    components: {
        FormRegister
    },
    methods: {
        goTo(name) {
            this.$router.push({ name: name })
        },

        createFirebaseUser(user) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(data => {
                    data.user
                        .updateProfile({
                            diplayName: user.name
                        })
                        .then(() => {
                            this.$router.push({ name: 'home' })
                        });
                })
                .catch(err => {
                    console.log(err.message);
                });
                
        }
        
    },
}
</script>