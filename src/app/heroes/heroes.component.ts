import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [NgFor, FormsModule, NgIf, UpperCasePipe],
})
export class HeroesComponent {
  heroes = HEROES;
}
