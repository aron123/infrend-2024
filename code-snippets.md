# Felhasználói űrlap
```html
<div class="row">
    <div class="col-md-6">
        <form [formGroup]="userForm">
            <div class="mb-3">
                <label for="customerId" class="form-label">Ügyfélkód</label>
                <input type="text" class="form-control" id="customerId" formControlName="customerId">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Név</label>
                <input type="text" class="form-control" id="name" formControlName="name">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Lakcím</label>
                <input type="text" class="form-control" id="address" formControlName="address">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Telefonszám</label>
                <input type="text" class="form-control" id="phone" formControlName="phone">
            </div>
            <div class="mb-3">
                <label for="idCard" class="form-label">Személyi igazolvány szám</label>
                <input type="text" class="form-control" id="idCard" formControlName="idCard">
            </div>
        </form>
        <div class="text-end">
            <button class="btn btn-outline-primary" (click)="saveUser()">Mentés</button>
        </div>
    </div>
</div>
```

# User service

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<UserDTO[]>('/api/user');    
  }

  getOne(id: number) {
    return this.http.get<UserDTO>('/api/user/' + id);    
  }

  create(user: UserDTO) {
    return this.http.post<UserDTO>('/api/user', user);
  }

  update(user: UserDTO) {
    return this.http.put<UserDTO>('/api/user', user);
  }

  delete(id: number) {
    return this.http.delete('/api/user/' + id); 
  }
}
```
