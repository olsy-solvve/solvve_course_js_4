import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import 'primeflex/primeflex.scss';

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Carousel from "primevue/carousel";

export default (app) => {
  app.use(PrimeVue, { ripple: true });
  app.component("MyMenu", TabMenu);
  app.component("InputText", InputText);
  app.component("Password", Password);
  app.component("Divider", Divider);
  app.component("Dropdown", Dropdown);
  app.component("Checkbox", Checkbox);
  app.component("MyButton", Button);
  app.component("HomeCarousel", Carousel);
};
