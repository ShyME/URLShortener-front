import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { UrlComponent } from './components/url/url.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: ":shortUrl", component: UrlComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
