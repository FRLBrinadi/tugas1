import { Component, ContentChild, OnInit } from '@angular/core';
import { ContentModel } from './content.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content: ContentModel = new ContentModel();

  constructor(private database: AngularFireDatabase) {}

  ngOnInit(): void {}
}
