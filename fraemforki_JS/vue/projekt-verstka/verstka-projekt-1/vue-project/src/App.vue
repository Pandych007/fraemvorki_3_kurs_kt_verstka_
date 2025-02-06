<template>
  <header>
    <!-- первый блок -->
    <div class="header-row">
      <div class="logo">
        <p>logo</p>
      </div>
      <div class="menu">
        <p>About</p>
        <p>Work</p>
        <p>Contact</p>
      </div>
    </div>
    <div class="headerText">
      <div class="text">
        <div class="text1">Branding | Image making</div>
        <div class="text2"><h1>Visual Designer</h1></div>
        <div class="text3">
          <p>
            This is a template Figma file, turned into code using Anima. <br />
            Learn more at AnimaApp.com
          </p>
        </div>
        <button class="text4">Contact</button>
      </div>
      <div class="textImg">
        <img :src="image" />
      </div>
    </div>
    <div class="parters">
      <div class="google"><img :src="google" /></div>
      <div class="nike"><img :src="nike" /></div>
      <div class="samsung"><img :src="samsung" /></div>
      <div class="apple"><img :src="apple" /></div>
      <div class="adidas"><img :src="adidas" /></div>
    </div>
    <!-- второй  блок -->
    <div class="produkts">
      <div class="produkts1">
        <div class="produkts1Img"><img :src="Product1" /></div>
        <div class="produkts1Text">
          <h3>Product Design</h3>
          <p>
            This is a template Figma file, <br />turned into code using Anima.
            Learn more at AnimaApp.com
          </p>
        </div>
      </div>

      <div class="produkts2">
        <div class="produkts2Img"><img :src="Product2" /></div>
        <div class="produkts2Text">
          <h3>Product Design</h3>
          <p>
            This is a template Figma file, <br />turned into code using Anima.
            Learn more at AnimaApp.com
          </p>
        </div>
      </div>

      <div class="produkts3">
        <div class="produkts3Img"><img :src="Product3" /></div>
        <div class="produkts3Text">
          <h3>Product Design</h3>
          <p>
            This is a template Figma file, <br />turned into code using Anima.
            Learn more at AnimaApp.com
          </p>
        </div>
      </div>
    </div>

    <!--   третий блок -->

    <!--   четвертый  блок -->
  </header>
  <!--   пятый  блок -->
  <footer class="footer">
    <div class="textFooter">
      <h3>Lets work together</h3>
      <p>
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com This is a template Figma file, turned into code using
        Anima. Learn more at AnimaApp.com
      </p>
      <ul class="social">
        <li>
          <a href="#"><img :src="dis" /></a>
        </li>
        <li>
          <a href="#"><img :src="fasebook" /></a>
        </li>
        <li>
          <a href="#"><img :src="bal" /></a>
        </li>
        <li>
          <a href="#"><img :src="insta" /></a>
        </li>
        <li>
          <a href="#"><img :src="Be" /></a>
        </li>
      </ul>
    </div>
    <div class="formFooter">
      <div>
        <input class="formelem" type="text" placeholder="name" />
      </div>
      <div>
        <input class="formelem" type="email" placeholder="email" />
      </div>
      <div><button class="text4 button">Submit</button></div>
    </div>
  </footer>
</template>

<script>
import image from "./assets/img/gerl.png";
import google from "./assets/img/goole.png";
import adidas from "./assets/img/adidas.png";
import apple from "./assets/img/apple.png";
import nike from "./assets/img/nike.png";
import samsung from "./assets/img/samsung.png";
import dis from "./assets/img/dis.png";
import fasebook from "./assets/img/fasebook.png";
import bal from "./assets/img/bal.png";
import insta from "./assets/img/insta.png";
import Be from "./assets/img/Be.png";
import Product1 from "./assets/img/Product1.png";
import Product2 from "./assets/img/Product2.png";
import Product3 from "./assets/img/Product3.png";

export default {
  data: function () {
    return {
      image: image,
      google: google,
      adidas: adidas,
      apple: apple,
      nike: nike,
      samsung: samsung,
      dis: dis,
      fasebook: fasebook,
      bal: bal,
      insta: insta,
      Be: Be,
      Product1: Product1,
      Product2: Product2,
      Product3: Product3,
    };
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Epilogue";
  src: url(./assets/fonts/Epilogue/static/Epilogue-Regular.ttf);
}
header,
footer {
  font-family: "Epilogue";
  max-width: 1280px;
  margin: auto;
  padding: 10px 20px;
  box-sizing: border-box;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  flex-shrink: 0;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu p {
  margin: 0;
  cursor: pointer;
}
.headerText {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.text {
  width: 70%;
}

.text1 {
  font-family: "Epilogue";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.text2 {
  font-family: "Epilogue";
  font-size: 38px;
  font-weight: 600;
  line-height: 69.7px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.text3 {
  font-family: "Epilogue";
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.text4 {
  font-family: "Epilogue";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: white;
  background-color: #2d2d2d;
  border: none;
  width: Hug (211px) px;
  height: Hug (78px) px;
  padding: 24px 64px 24px 64px;
  gap: 10px;
  opacity: 0px;
}

.parters {
  display: flex;
  margin-top: 20px;
}
.parters div {
  width: Fill (1, 380px) px;
  height: Hug (130.83px) px;
  padding: 42px 68px 42px 68px;
  gap: 0px;

  opacity: 0px;
}

.footer {
  display: flex;
  padding-top: 1000px;
}

.footer > div {
  width: 50%;
}
.social {
  list-style: none;
}
.social li {
  display: inline-block;
  margin-right: 40px;
}

.formelem {
  width: Fill (520px) px;
  height: Hug (59px) px;
  min-width: 320px;
  max-width: 520px;
  padding: 16px 24px 16px 24px;
  gap: 10px;
  opacity: 0px;
  margin: 10px;
}

.button {
  margin: 10px;
}

/* второй блок */

.produkts {
  display: flex;
  flex-direction: column; /* Располагаем изображение и текст по вертикали */
  align-items: center; /* Центрируем элементы внутри каждого блока */
  text-align: center;
  width: 30%; /* Каждый блок занимает 30% ширины контейнера */
}
</style>
