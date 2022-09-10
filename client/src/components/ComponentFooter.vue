<script>
import image from "../assets/images.js";

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
  <footer class="text-white py-5 mt-8">
    <div class="container">
      <div class="footer-blocks flex flex-wrap justify-content-center">
        <div class="text-lg w-3 mx-4">
          <h3 class="text-3xl">Connect</h3>
          <p>If you have any questions or proposition, you can contact us:</p>
          <i class="pi pi-envelope"></i
          ><span class="text-center"><u>dev-solvvejs-4@gmail.com</u></span>
          <p>Join to our social network:</p>
          <ul class="footer-icons list-none flex pl-0">
            <li>
              <a class="mr-4" href="#"
                ><i class="pi pi-instagram text-white text-2xl"></i
              ></a>
            </li>
            <li>
              <a class="mr-4" href="#"
                ><i class="pi pi-facebook text-white text-2xl"></i
              ></a>
            </li>
            <li>
              <a class="mr-4" href="#"
                ><i class="pi pi-twitter text-white text-2xl"></i
              ></a>
            </li>
            <li>
              <a class="mr-4" href="#"
                ><i class="pi pi-linkedin text-white text-2xl"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="w-3 mx-4">
          <figure>
            <img class="img-footer" :src="img" />
            <figcaption>
              <p class="footer-text text-center">
                All rights reserved &copy; {{ year }}
              </p>
            </figcaption>
          </figure>
        </div>
        <div class="w-3 mx-4">
          <p class="text-2xl line-height-1">
            This project is voluntary, created by the development team:
          </p>
          <ul class="text-lg pl-0 mt-4 list-none">
            <li>
              <a href="#" class="no-underline text-white">
                <i class="text-lg pi pi-linkedin pr-2"></i>
                <span>Maslo Oleksii</span>
              </a>
            </li>
            <li>
              <a href="#" class="no-underline text-white">
                <i class="text-lg pi pi-linkedin pr-2"></i>
                <span>Ustimov Dmytro</span>
              </a>
            </li>
            <li>
              <a href="#" class="no-underline text-white">
                <i class="text-lg pi pi-linkedin pr-2"></i>
                <span>Shevchenko Yevhenii</span>
              </a>
            </li>
            <li>
              <a href="#" class="no-underline text-white">
                <i class="text-lg pi pi-linkedin pr-2"></i>
                <span>Sulska Lina</span>
              </a>
            </li>
            <li>
              <a href="#" class="no-underline text-white">
                <i class="text-lg pi pi-linkedin pr-2"></i>
                <span>Shvets Kateryna</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #787878;
}

h3 {
  margin-bottom: 24px;
}

.container {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  max-width: 1170px !important;
  min-width: 320px !important;
}

.footer--blocks_contacts {
  margin-top: 22px;
}

.footer-icons {
  margin-top: 20px;
}

.pi-envelope {
  margin-right: 11px;
}

.footer-icons a {
  text-decoration: none;
  cursor: pointer;
}
.img-footer {
  width: 100%;
  height: auto;
}

.footer-text {
  margin-top: 26px;
}
</style>
