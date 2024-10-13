import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterChatroomPage } from './enter-chatroom.page';

const routes: Routes = [
  {
    path: '',
    component: EnterChatroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterChatroomPageRoutingModule {}
