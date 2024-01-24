import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsdetailsComponent } from './commentsdetails.component';

describe('CommentsdetailsComponent', () => {
  let component: CommentsdetailsComponent;
  let fixture: ComponentFixture<CommentsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
