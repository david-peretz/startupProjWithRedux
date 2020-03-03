import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrgrsComponent } from "./orgs.component";

describe("EntitiesComponent", () => {
  let component: OrgrsComponent;
  let fixture: ComponentFixture<OrgrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrgrsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
