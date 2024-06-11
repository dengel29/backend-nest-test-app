import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { EquipmentModule } from './equipment/equipment.module';
import { BlocksModule } from './blocks/blocks.module';
import { WorkoutsModule } from './workouts/workouts.module';
import typeorm from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      include: [ExercisesModule, WorkoutsModule, BlocksModule],
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    BlocksModule,
    ExercisesModule,
    EquipmentModule,
    WorkoutsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
