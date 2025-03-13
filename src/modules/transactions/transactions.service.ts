import { Injectable, BadRequestException } from '@nestjs/common';
import { TransactionType } from '@/constants';
import { v4 as uuidv4 } from 'uuid';
import { AccountsService } from '@/modules/accounts/accounts.service';
import { TransactionsRepository } from './transactions.repository';
import { CreateTransactionDTO } from './create-transaction.dto';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  createTransaction(createTransactionDTO: CreateTransactionDTO): Transaction {
    const { accountId, type, amount } = createTransactionDTO;

    const accountBalance = this.accountsService.getAccountBalance(accountId);
    if (type === TransactionType.OUTCOME && accountBalance < amount) {
      throw new BadRequestException('Insufficient balance');
    }

    const transactionAmount =
      type === TransactionType.INCOME ? amount : -amount;

    this.accountsService.updateAccountBalance(accountId, transactionAmount);

    const transaction: Transaction = {
      id: uuidv4(),
      accountId,
      type,
      amount,
    };

    return this.transactionsRepository.create(transaction);
  }
}
