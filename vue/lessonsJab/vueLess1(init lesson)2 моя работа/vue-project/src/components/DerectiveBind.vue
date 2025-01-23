
<!--  binding (биндинг)
 Для формирования текстового содержимого используются {{ value }} 
 Для формирования выражения внутри атрибутов используется знак : вначале атрибута. Далее в кавычках можно указать JS выражение
 Для стилизации важно указать в кавычках объект (если надо указать JS выражение), перечислив значение стилизации как набор ключ-значение по указанному примеру
-->
 
<!-- Директивы
 v-for (директива для создания цикла) 
 v-if  (условная отрисовка)
-->
<template>
  <h1 class="main_text">Hello world!</h1>
  <p>{{ text }}</p>
  <p :class='classExample + "dered"'>{{ price }}</p>
  <p :style="{display:  (isShow) ? 'block' : 'none', fontSize: '50px'}">Hidden</p>

  <!-- Пример цикла v-for-->
  <ul>
    <li v-for="(item, ind) in products" :key="ind">
      {{ item }}
    </li>
  </ul>

  <!-- Пример условной отрисовки v-if -->
  <div v-if="isShow">Услованя отрисовка</div>
  <div v-else-if="price > 3000">Услованая отрисовка (price)</div>
  <div v-else>Услованя отрисовка (false)</div>


  <div>

  </div>
</template>

<script>
// Все переменные инициализируются внутри метода data() который возвращает объект с наборами ключ-значение 
// где ключ - имя переменной, а значение - его значение (число, строка, массив, булевый тип и тд)


  export default {
    data(){
      return {
        text: 'Some text!',
        price: 2000,
        classExample: 'bor',
        isShow: false,
        products: ["Шоколад", "Пончик","Жвачка", "Мармелад", "Газировка"],
        imgSrc: 'https://i.pinimg.com/originals/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.png'
      }
    }
  }
</script>


<!-- scoped - изолированная стилизация (модульная) -->
<style scoped>
.bordered{
  padding: 10px;
  border: 1px solid black;
}

.main_text {
  color: red
}

.second_text{
  color: purple;
}

</style>


<!-- 
моя работа на паре -->
 <!-- <template>
    <h1 class="main_text">hello world</h1>
    <p>{{ text }}</p> -->
    <!-- <p  class="price">{{ price }}</p> -->
    <!-- <p :class="classExpample + 'dered'">{{ price }}</p>
    <p :style="{ display: isShow ? 'block' : 'none', fontSize: '50px' }">Hidden</p>
    <ul>
      <li v-for="(item, ind) in products" :key="ind">
        {{ item }}
      </li>
    </ul>
   -->
    <!-- <div v-if="isShow">Условная отрисовка</div>
    <div v-else-if="price > 3000">Условная отрисовка (price)</div>
    <div v-else>Условная отрисовка (false)</div>
   -->
    <!-- ______________________________________ 
     Задание на паре
    Внутри div элемента отобразите картинку, ссылка которой 
    будет находиться в переменной imgSrc
    однако, данная картинка должна будет появится в том случае, 
    если переменная randomNumber будет содержать число больше 4, в 
    противном случае должен появится заголовок с текстов "Next time!"
    Создайте переменную randomNumber которая будет хранить РАНДОМНОЕ 
    число от 0 до 10 включительно (используя метод Math.random())
    Ответ необходиом отправить до конца занятия в ЛС тимса-->
  
    <!-- <div v-if="imgSrc">
      <img
        src="https://i.pinimg.com/originals/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.png"
        alt="."
      />
    </div>
    <div v-else-if="randomNumber > 4">
      <img
        src="https://i.pinimg.com/originals/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.png"
        alt="."
      />
    </div>
    <div v-else>в другой раз (true)</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'some text!',
        price: 2000,
        classExpample: 'bor',
        isShow: false,
        products: ['Шоколад', 'Пончик', 'Жвачка', 'Мармелад', 'Газировка'],
        imgSrc: 'https://i.pinimg.com/originals/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.png',
        randomNumber: 4,
        randomNumber1: true,
      }
    },
  }
  </script>
  
  <style scoped>
  .bordered {
    padding: 10px;
    border: 1px solid black;
  }
  .main_text {
    color: red;
  }
   -->
  <!--  .price{
  color: purple;
  } 
  </style> --
  