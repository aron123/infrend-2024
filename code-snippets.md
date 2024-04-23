# TransactionService

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BankTransferDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<BankTransferDTO[]>('/api/transactions');
  }

  getOne(id: number) {
    return this.http.get<BankTransferDTO>('/api/transactions/' + id);    
  }

  create(transaction: BankTransferDTO) {
    return this.http.post<BankTransferDTO>('/api/transactions', transaction);
  }
}
```

# TransactionFormComponent

```html
<div class="row">
    <div class="col-md-6">
        <form [formGroup]="transactionForm">
            <div class="mb-3">
                <label for="source" class="form-label">Küldő</label>
                <select class="form-select" id="source" formControlName="source"></select>
            </div>
            <div class="mb-3">
                <label for="destination" class="form-label">Cél</label>
                <select class="form-select" id="destination" formControlName="destination"></select>
            </div>
            <div class="mb-3">
                <label for="amount" class="form-label">Összeg (Ft):</label>
                <input type="number" min="0" class="form-control" id="amount" formControlName="amount">
            </div>
        </form>
        <button class="btn btn-outline-primary" (click)="createTransaction()">Küldés</button>
    </div>
</div>
```
