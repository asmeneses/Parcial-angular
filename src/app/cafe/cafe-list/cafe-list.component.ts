import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { dataCafes } from '../dataCafes';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  constructor(private cafeService: CafeService) { }
  cafes: Array<Cafe> = [];

  getCafesService() {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  getCafes(){

    return this.cafes;
  }

  ngOnInit() {
    this.getCafesService();
  }

}
