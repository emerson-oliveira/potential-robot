import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepository: AccountsRepository) {}

  createAccount(id: string, name: string): Account {
    const account: Account = { id, name, balance: 0 };
    this.accountsRepository.create(account);
    return account;
  }

  getAccountBalance(id: string): number {
    const account = this.accountsRepository.findById(id);
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    return account.balance;
  }

  updateAccountBalance(id: string, amount: number): void {
    const account = this.accountsRepository.findById(id);
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    account.balance += amount;
  }
}