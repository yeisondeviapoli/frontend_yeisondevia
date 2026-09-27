import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsManager } from './news-manager';

describe('NewsManager', () => {
  let component: NewsManager;
  let fixture: ComponentFixture<NewsManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsManager],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
