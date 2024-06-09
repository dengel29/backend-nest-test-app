import { DataSource } from 'typeorm';
import { Block, BlockExercise } from '../../blocks/block.entity';
import { Seeder } from 'typeorm-extension';
import { Exercise } from '../../exercises/exercise.entity';

type UnsavedBlockExercise = Omit<BlockExercise, 'id' | 'block'>;

export default class BlockSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const exercisesRepository = dataSource.getRepository(Exercise);
    const blockRepository = dataSource.getRepository(Block);
    const blockExerciseRepository = dataSource.getRepository(BlockExercise);

    // block one: warm up: 2 sets  barbell lunge l -> r // 6-8 reps // 5kg
    const barbellL = await exercisesRepository.findOneByOrFail({
      name: 'Barbell Lunge (L)',
    });
    const barbellR = await exercisesRepository.findOneByOrFail({
      name: 'Barbell Lunge (R)',
    });

    const bbL: UnsavedBlockExercise = {
      repBase: 6,
      repMax: 8,
      weight: 5,
      order: 0,
      exercise: barbellL,
    };

    const bbR: UnsavedBlockExercise = {
      repBase: 6,
      repMax: 8,
      weight: 5,
      order: 1,
      exercise: barbellR,
    };

    await blockExerciseRepository.save([bbL, bbR]);

    const blockOne: Block | Omit<Block, 'id'> = {
      section: 'warmup',
      name: 'Warm Up',
      setCount: 2,
      order: 0,
      blockExercises: [bbL, bbR],
    };

    // await blockRepository.save(blockOne);

    // block two: warm up: 2 sets sumo deadlift // 10 reps // 45kg
    const sumo = await exercisesRepository.findOneByOrFail({
      name: 'Sumo Deadlift',
    });

    const s: UnsavedBlockExercise = {
      repBase: 10,
      weight: 45,
      order: 0,
      exercise: sumo,
    };

    await blockExerciseRepository.save([s]);

    const blockTwo: Block | Omit<Block, 'id'> = {
      section: 'warmup',
      name: 'Warm Up',
      setCount: 2,
      order: 1,
      blockExercises: [s],
    };

    // await blockRepository.save(blockTwo);

    // block three: 3 sets cable kickback l -> r
    const cableKickL = await exercisesRepository.findOneByOrFail({
      name: 'Cable Kickback (L)',
    });
    const cableKickR = await exercisesRepository.findOneByOrFail({
      name: 'Cable Kickback (R)',
    });

    const ckL: UnsavedBlockExercise = {
      repBase: 15,
      exercise: cableKickL,
      order: 0,
    };

    const ckR: UnsavedBlockExercise = {
      repBase: 15,
      exercise: cableKickR,
      order: 1,
    };

    await blockExerciseRepository.save([ckL, ckR]);

    const blockThree: Block | Omit<Block, 'id'> = {
      name: 'Main',
      setCount: 3,
      order: 2,
      blockExercises: [ckL, ckR],
    };

    // await blockRepository.save(blockThree);

    // block four; 4 sets sumo deadlift // 4 sets // 10-12 reps // 90kg
    const s2: UnsavedBlockExercise = {
      repBase: 10,
      repMax: 12,
      weight: 90,
      order: 0,
      exercise: sumo,
    };

    await blockExerciseRepository.save([s2]);

    const blockFour: Block | Omit<Block, 'id'> = {
      name: 'Main',
      setCount: 4,
      order: 3,
      blockExercises: [s2],
    };

    // await blockRepository.save(blockFour);

    // block five; 4 sets dumbbell shoulder press // 8 reps // 18-25kg
    const shoulderPress = await exercisesRepository.findOneByOrFail({
      name: 'Dumbbell Shoulder Press',
    });

    const sp: UnsavedBlockExercise = {
      repBase: 8,
      weight: 18,
      order: 0,
      exercise: shoulderPress,
    };

    await blockExerciseRepository.save([sp]);

    const blockFive: Block | Omit<Block, 'id'> = {
      name: 'Main',
      setCount: 4,
      order: 4,
      blockExercises: [sp],
    };

    // await blockRepository.save(blockFive);

    // block six: 4 sets single arm cable row l -> r // 10 - 12 reps, cable seated row // 6-8 reps
    const cableRowL = await exercisesRepository.findOneByOrFail({
      name: 'Single Arm Cable Row (L)',
    });

    const cableRowR = await exercisesRepository.findOneByOrFail({
      name: 'Single Arm Cable Row (R)',
    });

    const seatedRow = await exercisesRepository.findOneByOrFail({
      name: 'Cable Seated Row',
    });

    const crL: UnsavedBlockExercise = {
      repBase: 10,
      repMax: 12,
      order: 0,
      exercise: cableRowL,
    };

    const crR: UnsavedBlockExercise = {
      repBase: 10,
      repMax: 12,
      order: 1,
      exercise: cableRowR,
    };

    const csr: UnsavedBlockExercise = {
      repBase: 6,
      repMax: 8,
      order: 2,
      exercise: seatedRow,
    };

    await blockExerciseRepository.save([crL, crR, csr]);

    const blockSix: Block | Omit<Block, 'id'> = {
      name: 'Main',
      setCount: 4,
      order: 5,
      blockExercises: [crL, crR, csr],
    };

    // await blockRepository.save(blockSix);

    // block seven: 1 set dumbbell squat jump 1 rep -> barbell lunge 1 rep -> plank with stability ball -> glute bridge hold
    const jumpSquat = await exercisesRepository.findOneByOrFail({
      name: 'Dumbbell Jump Squat',
    });

    const plank = await exercisesRepository.findOneByOrFail({
      name: 'Plank With Stability Ball',
    });

    const bridge = await exercisesRepository.findOneByOrFail({
      name: 'Glute Bridge Hold',
    });

    const js: UnsavedBlockExercise = {
      exercise: jumpSquat,
      repBase: 1,
      order: 0,
    };

    const bbL2: UnsavedBlockExercise = {
      exercise: barbellL,
      repBase: 1,
      order: 1,
    };

    const plk: UnsavedBlockExercise = {
      exercise: plank,
      repBase: 1,
      durationBase: 20,
      order: 2,
    };

    const brd: UnsavedBlockExercise = {
      exercise: bridge,
      repBase: 1,
      durationBase: 40,
      order: 3,
    };

    await blockExerciseRepository.save([js, bbL2, plk, brd]);

    const blockSeven: Block | Omit<Block, 'id'> = {
      name: 'come down',
      setCount: 1,
      order: 6,
      blockExercises: [js, bbL2, plk, brd],
    };

    // await blockRepository.save(blockSeven);

    await blockRepository.save([
      blockOne,
      blockTwo,
      blockThree,
      blockFour,
      blockFive,
      blockSix,
      blockSeven,
    ]);
  }
}
