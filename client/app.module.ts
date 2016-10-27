import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }   from "./app.component";
import { HttpModule} from "@angular/http";
import { FormsModule }   from "@angular/forms";
import { FadingCircleComponent } from "ng2-spin-kit/app/spinner/fading-circle.js";

import { RouterModule }   from "@angular/router";

import { ShowComponent} from "./shows/show.component";
import { AddShowComponent} from "./shows/add-show.component";
import { UserShowsComponent} from "./shows/user-shows.component";
import { TopNavigationComponent } from "./shared/top-nav.component";
import { PageNotFoundComponent } from "./shared/page-not-found.component";

import { routing } from "./app.routes";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [AppComponent, ShowComponent, TopNavigationComponent,
        UserShowsComponent, PageNotFoundComponent, AddShowComponent, FadingCircleComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
