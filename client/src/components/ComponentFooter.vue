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
      <div
        class="footer-blocks flex flex-wrap justify-content-between xl:justify-content-between lg:justify-content-around md:justify-content-around sm:justify-content-around"
      >
        <div
          class="footer-contacts text-lg xl:text-lg lg:text-sm md:text-sm sm:text-md w-3 xl:w-3 lg:w-3 md:w-5 sm:w-5 mx-4 xl:mx-4 lg:mx-4 md:mx-1 sm:mx-1"
        >
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
        <div
          class="footer-img w-3 mx-4 flex-order-1 xl:flex-order-1 lg:flex-order-1 md:flex-order-2 sm:flex-order-2"
        >
          <figure>
            <img class="img-footer" :src="img" />
            <figcaption>
              <p class="footer-text text-center">
                All rights reserved &copy; {{ year }}
              </p>
            </figcaption>
          </figure>
        </div>
        <div
          class="footer-dev w-4 mx-4 flex-order-2 xl:flex-order-2 lg:flex-order-2 md:flex-order-1 sm:flex-order-1 xl:w-4 lg:w-4 md:w-5 sm:w-5 xl:mx-4 lg:mx-4 md:mx-1 sm:mx-1"
        >
          <p class="text-2xl line-height-1">
            This project is voluntary, created by the development team:
          </p>
          <ul
            class="text-lg xl:text-lg lg:text-sm md:text-md sm:text-md pl-0 mt-4 list-none"
          >
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

@media screen and (max-width: 575px) {
  .footer-blocks {
    justify-content: space-around !important;
  }

  .footer-contacts {
    width: 100% !important;
    margin: 10px 10px 30px 10px !important;
    order: 0 !important;
  }

  .footer-img {
    width: 100% !important;
    margin: 10px !important;
    order: 2 !important;
  }

  .footer-dev {
    width: 100% !important;
    margin: 10px !important;
    order: 1 !important;
  }
}
</style>
