import { Module } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [AccountsModule, TransactionsModule],
})
export class AppModule {}
