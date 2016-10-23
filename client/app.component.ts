import { Component } from "@angular/core";

import { ShowService } from "./shows/show.service";

@Component({
    selector: "my-app",
    templateUrl: "client/app.component.html",
    providers: [ShowService]
})
export class AppComponent {
    title = "Oded site!";
}
