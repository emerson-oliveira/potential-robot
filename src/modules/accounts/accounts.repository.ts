import { Injectable } from '@nestjs/common';
import { Account } from './accounts.entity';

@Injectable()
export class AccountsRepository {
  private accounts: Map<string, Account> = new Map();

  constructor() {
    const staticAccount: Account = {
      id: '1',
      name: 'Conta Estática',
      balance: 0,
    };
    this.accounts.set(staticAccount.id, staticAccount);
  }

  create(account: Account): Account {
    this.accounts.set(account.id, account);
    return account;
  }

  findById(id: string): Account | undefined {
    return this.accounts.get(id);
  }

  updateBalance(id: string, amount: number): void {
    const account = this.accounts.get(id);
    if (account) {
      account.balance += amount;
    }
  }
}
