import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { BankTransferDTO, UserDTO } from '../../../models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {
  transactionService = inject(TransactionService);

  useService = inject(UserService);

  formBuilder = inject(FormBuilder);

  users: UserDTO[] = [];

  transactionForm = this.formBuilder.group<BankTransferDTO>({
    id: 0,
    timestamp: '',
    amount: 0,
    source: null,
    destination: null
  });

  ngOnInit(): void {
    this.useService.getAll().subscribe((users) => this.users = users);
  }

  createTransaction() {
    const transaction = this.transactionForm.value as BankTransferDTO;

    this.transactionService.create(transaction).subscribe(transaction => { console.log(transaction); });
  }
}
