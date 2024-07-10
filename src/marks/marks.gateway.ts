import { WebSocketGateway, MessageBody } from '@nestjs/websockets';
import { MarksService } from './marks.service';
import { MsgMarksEnum } from 'src/utils/msg.marks.enum';
import { CoordsDto } from './dto/coords.dto';
import { MessagePattern } from '@nestjs/microservices';
import { MarkDto } from './dto/mark.dto';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4000',
  },
})
export class MarksGateway {
  constructor(private readonly marksService: MarksService) {}

  @MessagePattern({ cmd: MsgMarksEnum.TEST_SEND })
  test(@MessageBody() data: string) {
    return this.marksService.test(data);
  }

  @MessagePattern({ cmd: MsgMarksEnum.MAP_INIT_SEND })
  marksGet(@MessageBody() data: CoordsDto) {
    return this.marksService.marksGet(data);
  }

  @MessagePattern({ cmd: MsgMarksEnum.MARK_GET_SEND })
  markGet(@MessageBody() data: MarkDto) {
    return this.marksService.markGet(data);
  }
}
