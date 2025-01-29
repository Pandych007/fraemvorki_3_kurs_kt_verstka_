<template>
  <table class="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Card Number</th>
        <th>Expiration</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(card, index) in cards" :key="index">
        <td>{{ card.name }}</td>
        <td>{{ card.number.replace(/(\d{4})(?=\d)/g, "$1 ") }}</td>
        <td>{{ card.expiration }}</td>
        <td>**{{ card.cvc.slice(-1) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cards: Array,
  },
};
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.data-table th,
.data-table td {
  border: 1px solid #d1d5db;
  padding: 10px;
  text-align: left;
  font-size: 14px;
}
.data-table th {
  background-color: #f0f0f0;
  text-align: center;
}
</style>
