import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { TransactionType } from '@/constants';

export class CreateTransactionDTO {
  @ApiProperty({
    description: 'ID da conta associada à transação',
    example: '1',
  })
  @IsNotEmpty()
  @IsString()
  accountId: string;

  @ApiProperty({
    description: 'Tipo da transação (entrada ou saída)',
    example: TransactionType.INCOME,
    enum: TransactionType,
  })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({
    description: 'Valor da transação',
    example: 100,
  })
  @IsNumber()
  amount: number;
}
