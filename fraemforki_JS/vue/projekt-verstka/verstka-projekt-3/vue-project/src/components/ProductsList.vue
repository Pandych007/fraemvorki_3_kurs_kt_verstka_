<template>
  <div class="container">
    <div class="product-list">
      <div v-for="product in products" :key="product.idd" class="product-item">
        <img src="../assets/product.png" alt="Product Image" />
        <div class="product-info">
          <p class="product-name">Product name</p>
          <p class="product-description">Category: beauty</p>
          <p class="product-price">$100</p>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">Загрузка...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      loading: false,
      skip: 0,
      limit: 9,
      totalProducts: 190,
    };
  },
  mounted() {
    this.loadProducts();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scrol", this.handleScroll);
  },
  methods: {
    async loadProducts() {
      if (this.loading || this.allProductsLoaded) return;

      this.loading = true;
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`
        );
        const data = await response.json();

        if (data.products.lenght === 0) {
          this.allProductsLoaded = true;
        } else {
          this.products = [...this.products, ...data.products];
          this.skip == this.limit;
        }
      } catch (error) {
        console.log("Ошибка загрузки товаров:", erro);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      if ((scrollPosition >= documentHeight - 100) & !this.loading) {
        this.loadProducts();
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  min-height: 200vh;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.product-item {
  background-color: white;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.product-info {
  margin-top: 10px;
}

.product-name {
  font-weight: bold;
  font-size: 1.1em;
}

.product-description {
  font-size: 0.9em;
  color: #777;
}

.product-price {
  font-size: 1.1em;
  color: #27ae60;
}

.loading {
  text-align: center;
  padding: 10px;
  color: #555;
}
</style>
