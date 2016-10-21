import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }   from "./app.component";
import { HttpModule} from "@angular/http";

import { ShowComponent} from "./shows/show.component";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, ShowComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
