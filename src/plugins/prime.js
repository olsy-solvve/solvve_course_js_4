import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import InputNumber from "primevue/inputnumber";
import InputMask from "primevue/inputmask";

export default (app) => {
  app.use(PrimeVue, { ripple: true });
  app.component("MyMenu", TabMenu);
  app.component("InputText", InputText);
  app.component("PrimePassword", Password);
  app.component("PrimeDivider", Divider);
  app.component("PrimeDropdown", Dropdown);
  app.component("PrimeCheckbox", Checkbox);
  app.component("MyButton", Button);
  app.component("HomeCarousel", Carousel);
  app.component("InputNumber", InputNumber);
  app.component("InputMask", InputMask);
};
