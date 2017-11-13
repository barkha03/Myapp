import { Component , OnInit} from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-heroes',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
 // template:`<div>
 // <div><h1 style="color:pink">Hello this is {{hero.name}} and Id {{hero.id}}</h1></div>
  //<div><p style="color:orange">This is {{past.appStatus}} scenario</p></div>
  /*template:` <h2>{{hero.name}} details!</h2>
  <h2>{{hero.id}}details!!</h2>
  
  
  `*/
  /*template:`<h2>My Heroes</h2>
  <ul >
  <li *ngFor="let hero of heroes">
  <span>{{hero.id}}</span> {{hero.name}}
</li>
  </ul>`*/
  template:`<h2>My Heroes</h2>
  
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span>{{hero.id}}</span> {{hero.name}}
    </li>
  
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <ul>
    <li>{{selectedHero.id}}</li>
    <li>{{selectedHero.name}}</li>
    </ul>
    <div>
    <label>id: </label>
    <input [(ngModel)]="selectedHero.id" placeholder="id"/>
    </div>
    <div>

      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  

    
  </div>`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    font-color: Black;
    font-size:20px;
  }`],
  providers: []
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
 
  getHeroesSlowly(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroesSlowly();
  }
  //heroes = HEROES;
  heroes : Hero[];
  //title = 'app';
/*hero: Hero ={
id:1,
name:"Barkha"
};*/
selectedHero: Hero;

 onSelect(hero: Hero): void {
   this.selectedHero = hero;
 }
past: Past={
  appStatus:"Present"
};

}


export class Hero{
id:number;
name:string;


}

export class Past{
  appStatus:string;
}

