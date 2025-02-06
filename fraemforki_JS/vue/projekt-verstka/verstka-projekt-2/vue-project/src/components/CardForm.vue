<template>
  <Form ref="form" :validation-schema="validationSchema" @submit.prevent="click">
    <div class="cards">
      <div class="frontCard">
        <div class="input-group">
          <!-- <input
            class="nameCard"
            v-model="NweDateCard.name"
            required
            placeholder="Holder of card"
          /> -->
          <Field class="nameCard" name="name" v-model="form.name" />
          <ErrorMessage name="name" class="error_text" />
        </div>

        <div class="input-group">
          <!-- <input
            class="nameCard"
            v-model="NweDateCard.numberCared"
            required
            maxlength="16"
            placeholder="Card Number"


          /> -->
          <Field class="nameCard" name="numberCared" v-model="form.nameCard" />
          <ErrorMessage name="numberCared" class="error_text" />
        </div>

        <div class="input-row">
          <div class="input-group">
            <label>VALID THRU:</label><br />
            <!-- <input
              class="ym"
              required
              placeholder="MM"
              v-model="NweDateCard.mounth"
              maxlength="12"
            /> -->

            <Field class="ym" name="mounth" v-model="form.mounth" />
            <ErrorMessage name="mounth" class="error_text" />

            <img src="../assets/Line 1.png" alt="" />
            <!-- <input class="ym" required placeholder="YY" v-model="NweDateCard.year" /> -->
            <Field class="ym" name="year" v-model="form.year" />
            <ErrorMessage name="year" class="error_text" />
          </div>
        </div>
      </div>

      <div class="backCard">
        <div class="lineCard"></div>
        <div class="input-group">
          <!-- <input
            v-model="NweDateCard.cvc"
            class="ym cvcCod"
            type="password"
            required
            maxlength="3"
            placeholder="CVC"
          /> -->
          <Field class="ym cvcCod" name="cvc" v-model="form.cvc" />
          <ErrorMessage name="cvc" class="error_text" />
        </div>
      </div>
    </div>
    <button type="submit" class="button">добавить</button>
  </Form>
  <table class="styled-table">
    <tr>
      <th>имя владельца карты</th>
      <th>номер карты</th>
      <th>месяц и год</th>
      <th>cvc</th>
    </tr>
    <tr v-for="(DateCar, index) in DateCard" :key="index">
      <td>{{ DateCar.name }}</td>
      <td>{{ DateCar.numberCared }}</td>
      <td>{{ DateCar.mounth }} / {{ DateCar.year }}</td>
      <td>{{ DateCar.cvc }}</td>
    </tr>
  </table>
</template>

<script>
import { validationSchema } from "@/validationRules";
import { ErrorMessage, Field, Form } from "vee-validate";
export default {
  components: { Field, ErrorMessage, Form },
  data() {
    return {
      validationSchema,
      form: {
        name: "",
        numberCared: "",
        mounth: "",
        year: "",
        cvc: "",
      },
      DateCard: [],
    };
  },
  // methods: {
  //   click() {
  //     this.DateCard.push({ ...this.NweDateCard });
  //   },
  // },

  methods: {
    async click() {
      const isValid = await this.$refs.form.validate();
      //console.log(isValid);
      //this.DateCard.push({ ...this.NweDateCard });
    },
  },
};
</script>

<style scoped>
.cards {
  position: relative;
}

.frontCard,
.backCard {
  position: absolute;
}

.frontCard {
  width: 388px;
  height: 239px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ececec;
  padding: 20px;
  z-index: 2;
}

.nameCard {
  width: 324px;
  height: 42px;
  border: 2px solid rgba(173, 173, 173, 1);
  color: rgb(0, 0, 0);
}

.ym {
  width: 80px;
  height: 42px;
  border: 2px solid rgba(173, 173, 173, 1);
  color: rgb(0, 0, 0);
}

.backCard {
  width: 388px;
  height: 239px;
  border-radius: 10px;
  background-color: rgba(199, 199, 199, 1);
  padding: 20px;
  z-index: 1;
  left: 126px;
  top: 32px;
}

.cvcCod {
  float: right;
  margin-top: 77px;
}

.lineCard {
  width: 100%;
  height: 50px;
  margin-top: 60px;
  background-color: rgb(0, 0, 0);
}

.button {
  margin-top: 500px;
}

.styled-table {
  width: 1000px;
  border-collapse: collapse;
  font-family: "Arial", sans-serif;
  margin: 20px 0;
  font-size: 16px;
  min-width: 300px;
  background-color: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.styled-table th {
  background-color: #2563eb;
  color: white;
  text-align: left;
  padding: 12px;
  text-transform: uppercase;
  font-weight: bold;
}

.styled-table td {
  padding: 12px;
  text-align: left;
  color: #000000;
}

.styled-table tr {
  border-bottom: 1px solid #ddd;
}

.styled-table tr:nth-child(even) {
  background-color: #f3f4f6;
}

.styled-table tr:last-child {
  border-bottom: none;
}

.styled-table tr:hover {
  background-color: #f1f5fb;
}
</style>
