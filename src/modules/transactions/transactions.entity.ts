import { TransactionType } from '@/constants';

export class Transaction {
  id: string;
  accountId: string;
  type: TransactionType;
  amount: number;
}
