import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AccountBalanceDTO {
  @ApiProperty({
    description: 'Saldo atual da conta',
    example: 1000,
  })
  @IsInt()
  @IsNotEmpty()
  balance: number;
}
