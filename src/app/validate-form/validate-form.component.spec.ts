import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateFormComponent } from './validate-form.component';

describe('ValidateFormComponent', () => {
  let component: ValidateFormComponent;
  let fixture: ComponentFixture<ValidateFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
