import { Muscles } from '../../types';
import { DataSource } from 'typeorm';
import { Exercise } from '../../exercises/exercise.entity';
import { Seeder } from 'typeorm-extension';

export default class ExerciseSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const exerciseRepository = dataSource.getRepository(Exercise);
    const muscles: { id: number; name: Muscles }[] = [
      { id: 0, name: 'Full Body' },
      { id: 1, name: 'Chest' },
      { id: 2, name: 'Back' },
      { id: 3, name: 'Shoulders' },
      { id: 4, name: 'Biceps' },
      { id: 5, name: 'Triceps' },
      { id: 6, name: 'Forearms' },
      { id: 7, name: 'Abs' },
      { id: 8, name: 'Obliques' },
      { id: 9, name: 'Quads' },
      { id: 10, name: 'Hamstrings' },
      { id: 11, name: 'Glutes' },
      { id: 12, name: 'Calves' },
      { id: 13, name: 'Neck' },
      { id: 14, name: 'Upper Back' },
      { id: 15, name: 'Lower Back' },
      { id: 16, name: 'Traps' },
      { id: 17, name: 'Adductors' },
      { id: 18, name: 'Abductors' },
      { id: 19, name: 'Serratus' },
      { id: 20, name: 'Hip Flexors' },
    ];

    const findMuscle = (
      muscles: { id: number; name: Muscles }[],
      ids: number[],
    ) => {
      return muscles.flatMap((m) => {
        if (ids.some((id) => m.id === id)) {
          return m.name;
        } else {
          return [];
        }
      });
    };

    const exercises = [
      {
        id: 0,
        name: 'Barbell Lunge (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [11]),
        info: 'https://s3-alpha-sig.figma.com/img/5c7b/4a52/8552d007f4c1f47b1a0164e72743af16?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhPepvG1oF1UuBHiz0evGnn2SDx6eFrJl6w9Fej2-cuVJECB5GyOm-hBlIaUSnvlJTyEd~g2kzkZD04A6OlWyUQq4JstcBePlZaT5CvaNHR2F8A-E~77zcEhzyeTH1F34t7H2PxyZZbECppwsa1p7qh70coTpYUGE-gikDGjsryKjKwMKW7L0pNl1otwH7Ok6jgKzKkI7dvaj84Mpq8eUdEGRhpRnNeUJKr2xc4YxJvajZNzLS7T9kEBP-llZMds2UuiEfhfTC1qzT2DYqD-Vz7W~vpsINhBX7eNYnV71Gd~RTsQ3ZMXo-2Fp5lRB-7tqTtTjqOqdN11xhQ7Slc5aA__',
      },
      {
        id: 1,
        name: 'Barbell Lunge (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [11]),
        info: 'https://s3-alpha-sig.figma.com/img/5c7b/4a52/8552d007f4c1f47b1a0164e72743af16?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhPepvG1oF1UuBHiz0evGnn2SDx6eFrJl6w9Fej2-cuVJECB5GyOm-hBlIaUSnvlJTyEd~g2kzkZD04A6OlWyUQq4JstcBePlZaT5CvaNHR2F8A-E~77zcEhzyeTH1F34t7H2PxyZZbECppwsa1p7qh70coTpYUGE-gikDGjsryKjKwMKW7L0pNl1otwH7Ok6jgKzKkI7dvaj84Mpq8eUdEGRhpRnNeUJKr2xc4YxJvajZNzLS7T9kEBP-llZMds2UuiEfhfTC1qzT2DYqD-Vz7W~vpsINhBX7eNYnV71Gd~RTsQ3ZMXo-2Fp5lRB-7tqTtTjqOqdN11xhQ7Slc5aA__',
      },
      {
        id: 2,
        name: 'Sumo Deadlift',
        side: null,
        muscleGroups: findMuscle(muscles, [9]),
        info: 'https://s3-alpha-sig.figma.com/img/9949/e047/8d598e27ec1489104db98f2ae41315a6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VPNNVwnkdVjrj1cfdP22d6dQpjDY1uCm0Y1X2Do3xTeMy3hbAZTbELw5b57axgN9KmKjWWH6nVHfYexVgTPAZp~l7nEcQk5G10cRKAa3dvmqcErnhVj6O8TQBbzCVsKzStHfovrgStW4qm6gLqHqDPdv-uTHEwdT~dEHnFPJLMPhNgmdPZUUwjQ27zMT68FJMJLYuiTp1etbPH5M5qu93LQXWo5oFp8lMSNpgJjIfKXGM9TQEj0onf4V8eGoh2bLEkg-Ff7eqls6wrIoB05Rpsywfpdx~UgvVPBS0R9sxjjsW5xiQqAt8hMuql52MVGSOVvc8sMX1mC5EBRs9S0j9w__',
      },
      {
        id: 3,
        name: 'Cable Kickback (L)',
        side: null,
        muscleGroups: findMuscle(muscles, [11, 10]),
        info: 'https://s3-alpha-sig.figma.com/img/2584/f53f/9b47c346c0f36b72e90cc1dca8784adc?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuI3QRvGBw4e9NGIB30KkRYYMhKlynp7kP2xhcldprCkB5cXQXrwXkUEyqM21R58AgJtLuTo~RdJQ905o-NwD9c4IJ7dyArrri7zaWJt5LHFVQwze1DmbRHzUdnBzzuj7SonouSAh854GszTLbdfHhsifik26RrF2wCBLXiMiCpu5pIFeyDT7k5oI-lMOsBHHbukfJDxh~msy9p-ySdyOsz3sW7LzGFQGmJCpIcl4kHbRTDjUjQ-WpKaRFsvuafwnTM~7B9Y~jVesvOtWbedDr7hWKDaFvEaumb6QeJxyq2soN3~qmN2RlHOd9Apbsnoj2Ykco9zImoAoI8e~JSp7g__',
      },
      {
        id: 33,
        name: 'Cable Kickback (R)',
        side: null,
        muscleGroups: findMuscle(muscles, [11, 10]),
        info: 'https://s3-alpha-sig.figma.com/img/2584/f53f/9b47c346c0f36b72e90cc1dca8784adc?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuI3QRvGBw4e9NGIB30KkRYYMhKlynp7kP2xhcldprCkB5cXQXrwXkUEyqM21R58AgJtLuTo~RdJQ905o-NwD9c4IJ7dyArrri7zaWJt5LHFVQwze1DmbRHzUdnBzzuj7SonouSAh854GszTLbdfHhsifik26RrF2wCBLXiMiCpu5pIFeyDT7k5oI-lMOsBHHbukfJDxh~msy9p-ySdyOsz3sW7LzGFQGmJCpIcl4kHbRTDjUjQ-WpKaRFsvuafwnTM~7B9Y~jVesvOtWbedDr7hWKDaFvEaumb6QeJxyq2soN3~qmN2RlHOd9Apbsnoj2Ykco9zImoAoI8e~JSp7g__',
      },
      {
        id: 4,
        name: 'Dumbbell Shoulder Press',
        side: null,
        muscleGroups: findMuscle(muscles, [3, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/74f0/e15c/b29131f886e65e87faa129c5e97f2b37?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iIodcncLqhxhUgOg6GZ1s2Eg8f9VkNRPMONCLnX0OKkEw3dCrnOjLl1~K19nPeahVScMDlXMlWWzAWljhNn5vlEwEHQ9UUlHfNX3-q~kE7OP8nauUjbLu0lyaBo1Hf385-sedumiCz0yZI2I8HHsz0O1tERCLV3Bw8BNsDJ9EEXpyHpaPctQIRwaEdfXlspPhzaxHdbTtURa83j7aaFHmNnD0RcHUKbMLKp6-Vsdhx1yezmgbBNrKofnRk-x7h0KBB-O-DZxUSkUXBfVTRUoOHNhunEvcbaAt7S7a4g1yvju-ZuuPiUp-nawmdFO~6WtOpvYRtHjTDaEcSq5iGGKLQ__',
      },
      {
        id: 5,
        name: 'Single Arm Cable Row (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [5, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/7c0f/5340/361ab8bbd5036441e0cfcf822b67d707?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQGgHz8MFbKtAEZkeSSuh2cXSnAZ7fIPF2vd2iqBOPP9FXUhZZj-Opff0nOZ4U~AMXcbYRyYnKfizjOJlrAX65xeIHFkUt8ZJ4p9acZGboOUKvMpkLwlVWP51MNGJesZtHwH9qtbdnJo7aWV65QHgQ8PB3UHF6de0-jD9a67xNMeg0gR64PjE5EEt2b4PeggYcdxKP1I1LKCaWjhHerywwnHv~cBNxwCOaaKK7GlONk34Cq~apLBYgZgIvgkRaSgrRNcUMp2z5YjOY6v7JL6JFGALYcHpxQcEz5vOZWXuUcwVD~D-BXPTw0xa7~Z6zRGjpuV-jKLDGg5tX9w62clEg__',
      },
      {
        id: 6,
        name: 'Single Arm Cable Row (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [5, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/7c0f/5340/361ab8bbd5036441e0cfcf822b67d707?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQGgHz8MFbKtAEZkeSSuh2cXSnAZ7fIPF2vd2iqBOPP9FXUhZZj-Opff0nOZ4U~AMXcbYRyYnKfizjOJlrAX65xeIHFkUt8ZJ4p9acZGboOUKvMpkLwlVWP51MNGJesZtHwH9qtbdnJo7aWV65QHgQ8PB3UHF6de0-jD9a67xNMeg0gR64PjE5EEt2b4PeggYcdxKP1I1LKCaWjhHerywwnHv~cBNxwCOaaKK7GlONk34Cq~apLBYgZgIvgkRaSgrRNcUMp2z5YjOY6v7JL6JFGALYcHpxQcEz5vOZWXuUcwVD~D-BXPTw0xa7~Z6zRGjpuV-jKLDGg5tX9w62clEg__',
      },
      {
        id: 7,
        name: 'Single Arm Barbell Row (L)',
        side: 'L',
        muscleGroups: findMuscle(muscles, [5, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/6c50/175b/7bcbb0fb15b9c12ec249454016947152?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A41~Jd9o8OhszPG5PhcRvU0ruNnUNTqeahw8gIJTxWg~XXcxUhm-CTw3MWrYc-0fOzOa0Db2WBzrmhi9kXlBgbFlWZfTAYYcTefile7pxxd6h4-RVaTk3k6u8nwkjy76CmLdWk66I3XHixX3dnUq-8Ey37ZV3udXPOCv9K6iWG9F5fbSvk6~QWDfpQcNzIAR9x1CGLhELI28no7c1ZT1ZyCbh2yAQdX7gRxY-ahGorR1MySDk8ERWEkuicT7OUMi8a3WLcw6UX-g~x4hdBa2vnIcXA38ebB0CTBIQTAcrFw0hMoCp6chrD78dI0LV2faf8sg9Z6seQg~Ks-degDqfg__',
      },
      {
        id: 8,
        name: 'Single Arm Barbell Row (R)',
        side: 'R',
        muscleGroups: findMuscle(muscles, [5, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/6c50/175b/7bcbb0fb15b9c12ec249454016947152?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A41~Jd9o8OhszPG5PhcRvU0ruNnUNTqeahw8gIJTxWg~XXcxUhm-CTw3MWrYc-0fOzOa0Db2WBzrmhi9kXlBgbFlWZfTAYYcTefile7pxxd6h4-RVaTk3k6u8nwkjy76CmLdWk66I3XHixX3dnUq-8Ey37ZV3udXPOCv9K6iWG9F5fbSvk6~QWDfpQcNzIAR9x1CGLhELI28no7c1ZT1ZyCbh2yAQdX7gRxY-ahGorR1MySDk8ERWEkuicT7OUMi8a3WLcw6UX-g~x4hdBa2vnIcXA38ebB0CTBIQTAcrFw0hMoCp6chrD78dI0LV2faf8sg9Z6seQg~Ks-degDqfg__',
      },
      {
        id: 9,
        name: 'Cable Seated Row',
        side: null,
        muscleGroups: findMuscle(muscles, [3, 5, 14]),
        info: 'https://s3-alpha-sig.figma.com/img/afd1/7cdb/6dd992dbf351cc4061237848ac34a111?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5ZGpVOYDDmyIgCuc3OO6-tP3ZLOcRFUutxypawI9bmaAEKkJMM-D5L0c89LS5YR1LS7nZy987djwKXvUlp~QHRZ4ThWLAQ2qz~OL7iZJDbmYm6eeXHM8SUcwUgsjI3fYt9PqNvOkulhASevAQK-oZiBDbPlB58tmKDAcpfIjNpQS46GCSq4hUaCogmTJo0ZMNYSlnBXQ4OoNNAoWa1T3GypFYf584NBXpcjnKeL10O5aieFweXHI7R2IktIU6P7AeEPs7fGKLhjcFDZQmlgz~kAERW-J6SRTua-IWk0O3LvFyQy8cJowiJTLkMFIEaJXB~EB5hoa~pqATOoj~W5Bw__',
      },
      {
        id: 10,
        name: 'Dumbbell Jump Squat',
        side: null,
        muscleGroups: findMuscle(muscles, [9, 11]),
        info: 'https://s3-alpha-sig.figma.com/img/7e3c/cc3d/f663978d3feaa476e5a54a8e0f5e3c92?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWjNEREWkmsXci0lhfwtawQrQlVf6r1DGhdbpoWtaCabOI~74i3aIJA2FUM~QYzxYsFgL2mUp9vwMzo96Es8QbymUbuwKt2nnNn4ZXQkxQNRvoIOW-MwOCQ8rtFAh0NMy3oSj3lWF2W3LFcGhfjfckqHAFSLUDr6AtmQwUaOEt~a1DqlVjIkRpy8bv88WvLh9I4VBVwfwk8VWYSv-Eqo-Si386WlwhiTxinrnTRQpifFo10s-yWfQSndNHUhKVz3XXkw01bqLb3UTKifcil2Y5fUVfbnZUY3pFtOfHHUfZkNAxLsoW~6PqgCoKX32FMofQ1LDBEG055w8JAfz-4F0w__',
      },
      {
        id: 10,
        name: 'Plank With Stability Ball',
        side: null,
        muscleGroups: findMuscle(muscles, [8, 20, 7]),
        info: 'https://s3-alpha-sig.figma.com/img/9e4c/24bd/e08296a2ca2a3142084c9febca1ab4c4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYiVCpgfcQD7BEzcZE2cVu5zSUqDQPfVR-WBW~wat3m1aqri-y6Z3655B3TLop54z35nmEk1yGUDANIhmfmxbkMqtpSGgqG8gB~6ruCKrhGmnhFEryJ1ejM0o9S3ecN8mSO6Q2juKVkGrURyYtmjr91fek2xRUKG8pDWruc1wSRj4RoMneGbG6hFzyv0GYyAP6hTnzXMliCI1XwhYvUCXtXupaCxj9Q6tHPK~pstk7mReJNhnUT5OYiqtwwZLRJCV3JvRCfYcXP-b3Zgz600-Fhkd~3ncCIGPRphi0U-jswuws8K-l~8lBNFI~PpQP8jIvtmGKWWVCRVsivBlmP~PQ__',
      },
      {
        id: 11,
        name: 'Glute Bridge Hold',
        side: null,
        muscleGroups: findMuscle(muscles, [11]),
        info: 'https://s3-alpha-sig.figma.com/img/8deb/230b/eb070eab446ebd9cc92bf87707957762?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIfgcDGT8bVVEegXU7iNpryfaOtJkpphjyYuiJNWW4aRz4FlCTqM4NHbwjxjEAnSwjmi-W7qUrFGbD70tRXx5IjWFDEQ1SfxE2~2sOprp6dULo6KMltjAYw76m2wlmG-omVvuPwS0Cunol9GgHDexwS9oaxSmDGCS7t4nFfEsjC6KJAmr-CLNcn9~O0PTR212a17YSyL7~cOlBLelp9L-sapMImWE1UxM5X5fyIVhB2MyWPfAp3U4iIexd~M7~thPTVQxx6Oabdh5d44PRWgUHtrWIkx5LrC-8we7LlPVU7BZmrw1g0xeDKpUQxz26B3maakH7dI0PW6iM1TbpwyUw__',
      },
    ];

    await exerciseRepository.save(exercises);
  }
}
