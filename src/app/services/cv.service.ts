import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  public cvs: Array<Personne> = [];


  constructor() { 
this.cvs.push({id: 1, name:'Ben Jemaa', firstName:'Nermine', age:26, cin:12345678, job:'Student', path:'assets/images/img_avatar_woman.png'});
this.cvs.push({id: 2, name:'Safi', firstName:'Amine', age:26, cin:12345678, job:'Instructor', path:'assets/images/img_avatar_man.png'});
this.cvs.push({id: 3, name:'My Code', firstName:'Go', age:26, cin:12345678, job:'School', path:'assets/images/gomycode.png'});





  }

  getListCv(): Personne[] {
    return this.cvs;
  }
}
