<template lang="pug">
  <v-dialog v-model="dialog1" max-width="500px">
    <v-card class="d-flex flex-column pa-5">
      <v-card-actions d-flex justify="end" class="pa-0">
        <v-spacer></v-spacer>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }" position-x="5" position-y="5">
            <v-btn
              icon
              @click="
                dialog1 = false;
                cycled = true;
              "
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Закрыть форму</span>
        </v-tooltip>
      </v-card-actions>
      <h3>Поставьте оценку {{ employee_id }}</h3>
      <v-text-field v-model="user_name" label="Введите свое имя"></v-text-field>
      <h5>Выберите необходимое количество звезд</h5>
      <v-rating
        v-model="rating"
        background-color="green lighten-3"
        color="green"
        empty-icon="$ratingFull"
        half-increments
        hover
      ></v-rating>
      <div black--text>Ваша оценка ({{ rating }})</div>
      <v-textarea solo v-model="description" name="input-7-4" label="Введите отзыв"></v-textarea>
      <v-btn depressed color="primary" @click="addReview">Оставить отзыв</v-btn>
      <v-overlay :absolute="absolute" :value="overlay" @click="overlay = false">
        Не все поля заполнены
      </v-overlay>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {

}
</script>
