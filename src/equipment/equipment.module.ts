import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';

@Module({
  controllers: [],
  providers: [EquipmentService],
})
export class EquipmentModule {}
