import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostListComponent } from './single-post-list.component';

describe('SinglePostListComponent', () => {
  let component: SinglePostListComponent;
  let fixture: ComponentFixture<SinglePostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostListComponent]
    });
    fixture = TestBed.createComponent(SinglePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
