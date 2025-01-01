import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [DbModule, ProdutoModule],
})
export class AppModule {}
