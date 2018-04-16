import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],

})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text: Observable<any[]>;
  message: string;
  chatBox;
  constructor(private db: AngularFirestore) {
    this.text = db.collection('chat').valueChanges();

  }
  ngOnInit() {
    this.
    db.
    doc('chat/5xjRPhnLII4HOzlIbLP3')
    .valueChanges()
    .subscribe((chat) => {
      this.chatBox = chat;
      console.log(this.chatBox);
  });
  }
  chat() {
    this.chatBox.chat[this.chatBox.chat.length] = this.message;
    this.db.doc('chat/5xjRPhnLII4HOzlIbLP3').update(this.chatBox);
  }
}
