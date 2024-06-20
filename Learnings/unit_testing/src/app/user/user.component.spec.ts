import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserDataService } from './user-data.service';
import { DataService } from '../data-service/data.service';

describe('Component: User', () => {
  let userComponent: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [UserComponent],
      providers: [UserDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    userComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should run the app', () => {
    expect(userComponent).toBeTruthy();
  });

  it('name of User component should be same as User service', () => {
    const userDataService = fixture.debugElement.injector.get(UserDataService);
    expect(userDataService.user.name).toEqual(userComponent.user.name);
  });

  it('if user is logged in, user name should be shown', () => {
    userComponent.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p')[1].textContent).toContain(
      userComponent.user.name
    );
  });

  it('if user is logged out, user name should not be shown', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p')[1].textContent).not.toContain(
      userComponent.user.name
    );
  });

  it('should test getName - Positive TestCases', () => {
    expect(userComponent.getName).toBeDefined();
    spyOn(userComponent, 'getName').and.callThrough();
    userComponent.getName('Bhaskar');
    expect(userComponent.fullName).not.toEqual('Shabd Kumar');
  });

  it('should test getName -  Negative TestCases', () => {
    expect(userComponent.getName).toBeDefined();
    spyOn(userComponent, 'getName').and.callThrough();
    userComponent.getName('Shabd');
    expect(userComponent.fullName).toEqual('Shabd Kumar');
  });

  it('user should not recive data normally', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getData').and.returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    expect(userComponent.data).not.toEqual('data');
  });

  it('user should recive data asynchronously', async(() => {
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getData').and.returnValue(Promise.resolve('data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(userComponent.data).toEqual('data');
    });
  }));

  // it('user should recive data asynchronously using fakeasync', fakeAsync(() => {
  //   const dataService = fixture.debugElement.injector.get(DataService);
  //   spyOn(dataService, 'getData').and.returnValue(Promise.resolve('data'));
  //   fixture.detectChanges();
  //   tick();
  //   expect(userComponent.data).toEqual('data');
  // }));
});
