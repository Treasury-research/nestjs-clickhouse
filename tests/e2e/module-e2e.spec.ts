import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ClickHouseService } from '../src/clickHouse.service';

describe('EventEmitterModule - e2e', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
  });

  it('clickhouse query', async () => {
    // console.log('app', app);
    const service = app.get(ClickHouseService);
    const sql = 'SELECT * FROM eth_logs where blockNumber = 13906668';
    const result = await service.query(sql);
    console.log('result', result);
    expect(result).toBeDefined();
    // console.log('result', result);
  });

  it('clickhouse insert', async () => {
    // console.log('app', app);
    const service = app.get(ClickHouseService);
    const sql = `
    INSERT INTO gettingstarted.eth_logs 
    VALUES (19,
    '0x9bfeecfea70dd957e5b4114b24462a916cc29ee45f7c2fa644ebc923564fe873', 
    8,
    '0x656C00e1BcD96f256F224AD9112FF426Ef053733',  
    '0x0000000000000000000000000000000000000000000001a8efad2fd726b00000',  [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x000000000000000000000000d490fd8edb6936a0d270d083fb806d15ebc807b1',
        '0x0000000000000000000000006cc5f688a315f3dc28a7781717a9a798a59fda7b'
      ],
      '2021-12-30 20:27:11',
      13906669,'0xffe1f31121c2b5b08aed34367f38de55b1b484501c87d92c9b69f9db9dc136ec',
      0,1,'0x01', 1) 

`;
    const result = await service.insert(sql);
    console.log('result', result);
    expect(result).toBeDefined();
    // console.log('result', result);
  });
});
