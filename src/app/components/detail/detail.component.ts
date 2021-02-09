import {Component, Input, OnInit} from '@angular/core';
import { HiringService } from 'src/app/services/hiring.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() retreivedCV: Personne = new Personne();

  constructor(private hiringService : HiringService) { }

  ngOnInit(): void {
  
  }


  getHiredCV(cv: Personne): void {
    this.hiringService.hiring(this.retreivedCV);

  }




}
