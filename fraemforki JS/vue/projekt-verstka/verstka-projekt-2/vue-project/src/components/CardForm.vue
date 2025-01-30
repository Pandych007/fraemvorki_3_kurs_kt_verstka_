<template>
  <form @submit.prevent="click">
    <div class="cards">
      <div class="frontCard">
        <div class="input-group">
          <input
            class="nameCard"
            v-model="NweDateCard.name"
            required
            placeholder="Holder of card"
          />
        </div>

        <div class="input-group">
          <input
            class="nameCard"
            v-model="NweDateCard.numberCared"
            required
            maxlength="16"
            placeholder="Card Number"
          />
        </div>

        <div class="input-row">
          <div class="input-group">
            <label>VALID THRU:</label><br />
            <input class="ym" required placeholder="MM" v-model="NweDateCard.mounth" />
            <img src="../src/assets/Line 1.png" alt="" />
            <input class="ym" required placeholder="YY" v-model="NweDateCard.year" />
          </div>
        </div>
      </div>

      <div class="backCard">
        <div class="lineCard"></div>
        <div class="input-group">
          <input
            v-model="NweDateCard.cvc"
            class="ym cvcCod"
            type="password"
            required
            maxlength="3"
            placeholder="CVC"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="button">добавить</button>
  </form>
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
      <td>{{ NweDateCard.cvc }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      NweDateCard: {
        name: "",
        numberCared: "",
        mounth: "",
        year: "",
        cvc: "",
      },
      DateCard: [],
    };
  },
  methods: {
    click() {
      this.DateCard.push({ ...this.NweDateCard });
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
  color: rgba(173, 173, 173, 1);
}

.ym {
  width: 73px;
  height: 42px;
  border: 2px solid rgba(173, 173, 173, 1);
  color: rgba(173, 173, 173, 1);
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
  background-color: rgba(151, 151, 151, 1);
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
  color: #333;
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
