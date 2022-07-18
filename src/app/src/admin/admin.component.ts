import { Component, OnInit } from '@angular/core';
import { Database, onValue, set, ref, update } from '@angular/fire/database';
import { ContactModel } from 'src/app/register/register.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public database: Database) {}

  ngOnInit(): void {}
}
