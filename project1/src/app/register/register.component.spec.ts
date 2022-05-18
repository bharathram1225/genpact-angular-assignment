import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should contain "register works!"', () => {

  //   //const comp = new HomeComponent();
  //   //let fixture:ComponentFixture <HomeComponent>;
  //   let fix =TestBed.createComponent(RegisterComponent);
  //   const bannerElement: HTMLElement= fix.nativeElement;
  //   console.log("BannerElement", bannerElement);
  //   console.log(bannerElement.querySelector('p'));
  //   expect(bannerElement.textContent).toContain("register works!!!!");
  //   });


  //   it('should contain "name"', () => {

  //     //const comp = new HomeComponent();
  //     //let fixture:ComponentFixture <HomeComponent>;
  //     let fix =TestBed.createComponent(RegisterComponent);
  //     const bannerElement: HTMLElement= fix.nativeElement;
  //     console.log("BannerElement", bannerElement);
  //     console.log(bannerElement.querySelector('button'));
  //     expect(bannerElement.textContent).toContain("name");
  //     });

  //     it('should contain "hello "', () => {

  //       });
});
