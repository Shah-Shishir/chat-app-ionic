import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterChatroomPage } from './enter-chatroom.page';

describe('EnterChatroomPage', () => {
  let component: EnterChatroomPage;
  let fixture: ComponentFixture<EnterChatroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterChatroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
