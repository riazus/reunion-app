import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsListComponent } from './components/meetings/meetings-list/meetings-list.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingsListComponent
  },
  {
    path: 'meetings',
    component: MeetingsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
