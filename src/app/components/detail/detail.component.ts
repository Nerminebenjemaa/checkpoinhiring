import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() retreivedCV: Personne = new Personne();
  constructor() { }

  ngOnInit(): void {
  }

}
