import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.scss";

import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import InputMask from "primevue/inputmask";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import RadioButton from 'primevue/radiobutton';

export default (app) => {
  app.use(PrimeVue, { ripple: true });
  app.component("MyMenu", TabMenu);
  app.component("InputText", InputText);
  app.component("PasswordForm", Password);
  app.component("FormDivider", Divider);
  app.component("MyDropdown", Dropdown);
  app.component("MyCheckbox", Checkbox);
  app.component("MyButton", Button);
  app.component("HomeCarousel", Carousel);
  app.component("InputMask", InputMask);
  app.component("PrimePassword", Password);
  app.component("PrimeDivider", Divider);
  app.component("FormDropdown", Dropdown);
  app.component("PrimeCheckbox", Checkbox);
  app.component("MyButton", Button);
  app.component("HomeCarousel", Carousel);
  app.component("FormTextarea", Textarea);
  app.component("FormCalendar", Calendar);
  app.component("FormRadioButton", RadioButton);
};
