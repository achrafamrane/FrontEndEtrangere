import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription-global',
  templateUrl: './inscription-global.component.html',
  styleUrls: ['./inscription-global.component.css']
})
export class InscriptionGlobalComponent implements OnInit {
  id: number;
showStep:Boolean=false;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  suivant(){
    this.showStep=true;
  }

}
