import { Controller, Get, Param } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private workoutsService: WorkoutsService) {}

  @Get(':id') // /workouts/:id
  async find(@Param('id') id: string) {
    return await this.workoutsService.find(+id);
  }
}
