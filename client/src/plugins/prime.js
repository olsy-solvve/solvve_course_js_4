import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.scss";

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import InputMask from "primevue/inputmask";
import OrderList from "primevue/orderlist";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Dialog from "primevue/dialog";
import DataView from "primevue/dataview";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";

export default (app) => {
  app.use(PrimeVue, { ripple: true });
  app.component("PrimeMenu", TabMenu);
  app.component("InputText", InputText);
  app.component("PrimePassword", Password);
  app.component("PrimeButton", Button);
  app.component("PrimeCarousel", Carousel);
  app.component("InputMask", InputMask);
  app.component("OrderList", OrderList);
  app.component("FormDropdown", Dropdown);
  app.component("FormTextarea", Textarea);
  app.component("FormCalendar", Calendar);
  app.component("FormRadioButton", RadioButton);
  app.component("PrimeDialog", Dialog);
  app.component("ListOfAllPets", DataView);
  app.component("PrimeCard", Card);
  app.component("PrimeCheckbox", Checkbox);
};
