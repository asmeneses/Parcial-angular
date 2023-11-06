/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

describe('BookListComponent', () => {
 let component: CafeListComponent;
 let fixture: ComponentFixture<CafeListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafeListComponent ],
     providers: [ CafeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CafeListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
     const book = new Cafe(
       faker.number.int(),
       faker.lorem.word(),
       faker.lorem.word(),
       faker.lorem.word(),
       faker.lorem.word(),
       faker.number.int(),
       faker.image.url()
     );
     component.cafes.push(book);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 3 <th.id> elements', () => {
  expect(debug.queryAll(By.css('th.id'))).toHaveSize(3)
 });
 it('should have 3 <td.nombre> elements', () => {
  expect(debug.queryAll(By.css('td.nombre'))).toHaveSize(3)
 });
 it('should have 3 <td.tipo> elements', () => {
  expect(debug.queryAll(By.css('td.tipo'))).toHaveSize(3)
 });
 it('should have 3 <td.region> elements', () => {
  expect(debug.queryAll(By.css('td.region'))).toHaveSize(3)
 });
 it('should have 3 <tr.cafe> elements', () => {
  expect(debug.queryAll(By.css('tr.cafe'))).toHaveSize(3)
 }); 

 it('should have td.nombre tag with the cafe.nombre', () => {
  debug.queryAll(By.css('td.nombre')).forEach((item, i)=>{
    expect(item.nativeElement.textContent).toContain(component.cafes[i].nombre)
  });
 });

 it('should have 2 <tr.cafe> elements and the deleted cafe should not exist', () => {
  const cafe = component.cafes.pop()!;
  fixture.detectChanges();
  expect(debug.queryAll(By.css('tr.cafe'))).toHaveSize(2)

  debug.queryAll(By.css('tr.nombre')).forEach((selector)=>{
    expect(selector.nativeElement.textContent).not.toContain(cafe.nombre);
  });
 });
});