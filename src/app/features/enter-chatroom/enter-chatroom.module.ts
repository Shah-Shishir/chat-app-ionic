import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnterChatroomPageRoutingModule } from './enter-chatroom-routing.module';
import { EnterChatroomPage } from './enter-chatroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnterChatroomPageRoutingModule,
  ],
  declarations: [EnterChatroomPage],
})
export class EnterChatroomPageModule {}
