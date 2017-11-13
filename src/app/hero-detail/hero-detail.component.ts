import { Component, OnInit , Input} from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'herodetail',
  //templateUrl: './hero-detail.component.html',
  //styleUrls: ['./hero-detail.component.css']
  template:`<div *ngIf="hero">
  <h2>{{hero.name}}detail</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
  <label>name:</label>
  <input [(ngModel)] = "hero.name" placeholder="name"></div>
  <herodetail [hero] = "selectedHero"></herodetail>`
})
export class HeroDetailComponent implements OnInit {
@Input() hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
