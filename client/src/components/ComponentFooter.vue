<script>
import image from "@/assets/images.js";

export default {
  data() {
    return {
      year: new Date().getFullYear(),
      img: image.pet1,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-blocks">
        <div class="footer--blocks_contacts">
          <h3>Connect</h3>
          <p>If you have any questions or proposition, you can contact us:</p>
          <i class="pi pi-envelope"></i
          ><span><u>dev-solvvejs-4@gmail.com</u></span>
          <p>Join to our social network:</p>
          <ul class="footer-icons">
            <li>
              <a href="#"><i class="pi pi-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="pi pi-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="pi pi-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="pi pi-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <div><img class="img-footer" :src="img" /></div>
      </div>
      <div>
        <p class="footer-text">All rights reserved &copy; {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: white;
  background-color: #787878;
  padding: 26px 0;
}

h3 {
  font-size: 40px;
  margin-bottom: 38px;
}

.container {
  box-sizing: border-box;
  margin: 0;
  padding: 0 75px;
}

.footer--blocks_contacts {
  margin-top: 42px;
}

.footer--blocks_contacts p,
span {
  font-size: 18px;
  padding-right: 35px;
}

.footer-icons {
  list-style-type: none;
  display: flex;
  margin-top: 40px;
  padding-left: 0;
}

.footer-icons i {
  font-size: 30px;
  color: white;
}

.pi-envelope {
  margin-right: 11px;
}

.footer-icons a {
  text-decoration: none;
  cursor: pointer;
  padding: 25px;
}

.footer-blocks {
  display: flex;
}

.footer-blocks div {
  width: 50%;
}

.img-footer {
  width: 100%;
  height: auto;
}

span {
  text-align: center;
}

.footer-text {
  text-align: center;
  margin-top: 46px;
}
</style>
