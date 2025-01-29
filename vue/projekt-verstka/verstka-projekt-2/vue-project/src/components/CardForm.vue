<template>
  <form @submit.prevent="validateAndSubmit" class="card-form">
    <div class="input-group">
      <label>Holder of card:</label>
      <input type="text" v-model="formData.name" required placeholder="John Doe" />
    </div>

    <div class="input-group">
      <label>Number of card:</label>
      <input
        type="text"
        v-model="formData.number"
        required
        maxlength="16"
        placeholder="1234 5678 9012 3456"
      />
    </div>

    <div class="input-row">
      <div class="input-group">
        <label>VALID THRU:</label>
        <input type="text" v-model="formData.expiration" required placeholder="MM/YY" />
      </div>

      <div class="cvc-input-group">
        <input text="password" required maxlength="3" placeholder="CVC" />
      </div>
    </div>

    <button type="submit">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        number: "",
        expiration: "",
        cvc: "",
      },
    };
  },
  methods: {
    validateAndSubmit() {
      const { name, number, expiration, cvc } = this.formData;
      const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
      const cardNumberRegex = /^\d{16}$/;
      const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const cvcRegex = /^\d{3}$/;

      const [month, year] = expiration.split("/");
      const currentYear = new Date().getFullYear() % 100;

      if (!nameRegex.test(name)) {
        alert("Имя должно содержать 2 слова из букв!");
        return;
      }

      if (!cardNumberRegex.test(number)) {
        alert("Номер карты должен содержать 16 цифр!");
        return;
      }

      if (!dateRegex.test(expiration) || +year < currentYear) {
        alert("Дата карты указана неверно!");
        return;
      }

      if (!cvcRegex.test(cvc)) {
        alert("CVC должен содержать 3 цифры!");
        return;
      }

      this.$emit("addCard", { ...this.formData });
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: "",
        number: "",
        expiration: "",
        cvc: "",
      };
    },
  },
};
</script>

<style scoped>
.card-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f3f4f6;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 300px;
  position: relative;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
}
.input-group input {
  width: 100px;
}
.input-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  position: relative;
}

.input-group,
.cvc-input-group {
  width: 48%;
}

.input-group label,
.cvc-input-group label {
  font-weight: bold;
  font-size: 14px;
}

.input-group input,
.cvc-input-group input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background-color: white;
  font-size: 14px;
  width: 100%;
}

.cvc-input-group {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #d1d5db;
  position: absolute;
  left: 500px;
  top: 0;
  color: black;
  margin-left: 10px;
  width: 500px;
  height: 300px;
}
.cvc-input-group input {
  width: 70px;
  left: 100px;
}
button {
  padding: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

button:hover {
  background-color: #1d4ed8;
}

.cvc-input-group input {
  color: black;
}
</style>
