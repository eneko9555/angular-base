import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroes: string[] = ["Spiderman", "Ironman", "Hulk", "She Hulk", "Thor"];
  public deletedHeroe?:string;


  deleteLastHeroe():void{
   this.deletedHeroe =  this.heroes.pop()
     
  }

}
