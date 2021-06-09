<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
        v-model="name"
        label="Nome"
        required
    ></v-text-field>

    <v-text-field
        v-model="email"
        :rules="rules.emailRules"
        label="E-mail"
        required
    ></v-text-field>

    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Data de nascimento"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

    <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Senha"
        hint="Minimo 8 caracteres"
        @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
        v-model="passwordConfirmation"
        :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.passwordMatch]"
        :type="showPasswordConfirmation ? 'text' : 'password'"
        name="input-10-1"
        label="Confirmação de senha"
        hint="Minimo 8 caracteres"
        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Criar conta
    </v-btn>

  </v-form>
</template>

<script>
export default {
    name: 'FormRegister',
    data() {
        return {
            valid: true,
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            showPassword: false,
            showPasswordConfirmation: false,
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: v => v.length >= 8 || 'Mínimo 8 caracteres',
                passwordMatch: () => this.password === this.passwordConfirmation || ('Senha e confirmação devem ser iguais'),
                emailRules: [
                    v => !!v || 'Obrigatório',
                    v => /.+@.+\..+/.test(v) || 'E-mail deve ser um endereço válido',
                ],
            },
        }
    },
    methods: {
      validate() {
        if(this.$refs.form.validate()) {
          const userRegister = {
            name: this.name,
            email: this.email,
            date: this.date,
            password: this.password
          }

          this.$emit('register', userRegister);
        }
      },
    }
}
</script>

<style lang="scss">

</style>