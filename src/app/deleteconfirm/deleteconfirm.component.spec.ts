import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmComponent } from './deleteconfirm.component';

describe('DeleteconfirmComponent', () => {
  let component: DeleteconfirmComponent;
  let fixture: ComponentFixture<DeleteconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteconfirmComponent]
    });
    fixture = TestBed.createComponent(DeleteconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
