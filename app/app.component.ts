import { Component } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
registerElement('rad-side-drawer', () => require('nativescript-telerik-ui/sidedrawer').RadSideDrawer);


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { }
