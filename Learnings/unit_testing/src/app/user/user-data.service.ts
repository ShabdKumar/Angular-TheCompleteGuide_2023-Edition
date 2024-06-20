import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user = { name: 'shabd' };

  constructor() { }
}
