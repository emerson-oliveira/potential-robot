import { Injectable } from '@nestjs/common';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionsRepository {
  private transactions: Transaction[] = [];

  create(transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }

  findAll(): Transaction[] {
    return this.transactions;
  }
}
