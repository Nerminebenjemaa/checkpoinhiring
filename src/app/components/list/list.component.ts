import {Component, OnInit} from '@angular/core';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvs: Personne [] = [];
  selectedCV: Personne [] = [];

  // cvs: Array<Personne> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initCvList();
  }


  initCvList(): void {
    const cv1 = new Personne(1, 'Ben Jemaa', 'Nermine', 26, 12345678, 'Student', 'assets/images/img_avatar_woman.png');
    const cv2 = new Personne(2, 'Safi', 'Amine', 26, 14785236, 'Instructor', 'assets/images/img_avatar_man.png');
    const cv3 = new Personne(3, 'Go', 'My Code', 99, 56321478, 'School', 'assets/images/gomycode.png');
    this.cvs.push(cv1);
    this.cvs.push(cv2);
    this.cvs.push(cv3);
    console.log(this.cvs);
  }


  getCvDetails(cv: Personne): void {
    this.selectedCV = cv;
    console.log(cv);
  }

}
