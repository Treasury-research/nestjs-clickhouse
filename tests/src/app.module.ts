import { Module } from '@nestjs/common';
import { ClickHouseModule } from '../../src';
import { ClickHouseService } from './clickHouse.service';

@Module({
  imports: [
    // ClickHouseModule.forRoot({
    //   url: 'http://localhost',
    //   port: 8123,
    //   debug: true,
    //   database: 'gettingstarted',
    // }),

    ClickHouseModule.forRootAsync({
      imports: [],
      useFactory: async () => ({
        url: 'http://localhost',
        port: 8123,
        debug: true,
        database: 'gettingstarted',
      }),
      inject: [],
    }),
  ],
  controllers: [],
  providers: [ClickHouseService],
})
export class AppModule {}
