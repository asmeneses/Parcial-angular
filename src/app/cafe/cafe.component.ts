import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  constructor(private cafeService: CafeService) { }
  cafes: Array<Cafe> = [];
  
  // getCafeList(): Array<Cafe> {
  //   return this.cafes;
  // }

  getCafes() {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }
  ngOnInit() {
    this.getCafes();
  }

}
