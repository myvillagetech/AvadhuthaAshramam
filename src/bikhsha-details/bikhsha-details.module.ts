import { Module } from '@nestjs/common';
import { BikhshaDetailsService } from './bikhsha-details.service';
import { BikhshaDetailsController } from './bikhsha-details.controller';

@Module({
  controllers: [BikhshaDetailsController],
  providers: [BikhshaDetailsService]
})
export class BikhshaDetailsModule {}
