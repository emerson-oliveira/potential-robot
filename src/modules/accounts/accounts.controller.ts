import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountBalanceDTO } from './account-balance.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiOperation({ summary: 'Consultar saldo da conta' })
  @ApiResponse({ status: 200, description: 'Saldo retornado com sucesso', type: AccountBalanceDTO })
  @Get(':id/balance')
  getBalance(@Param('id') id: string): AccountBalanceDTO {
    const balance = this.accountsService.getAccountBalance(id);
    return { balance };
  }
}