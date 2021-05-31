import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { BadUiComponent } from './bad-ui/bad-ui.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bad-ui',
    component: BadUiComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
