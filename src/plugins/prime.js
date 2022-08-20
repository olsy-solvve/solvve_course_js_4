import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons


import Menubar from 'primevue/menubar';


export default (app) => {
    app.use(PrimeVue, {ripple: true});
    app.component("MyMenubar", Menubar);
}