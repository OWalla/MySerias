import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserShowsComponent} from "./shows/user-shows.component";
import { AddShowComponent} from "./shows/add-show.component";
import { UpcomingShowsComponent} from "./shows/upcoming-shows.component";
import { PageNotFoundComponent } from "./shared/page-not-found.component";

export const routes: Routes = [
    { path: "", component: UserShowsComponent },
    { path: "addShow", component: AddShowComponent },
    { path: "upcomingShows", component: UpcomingShowsComponent },
    { path: "**", component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
