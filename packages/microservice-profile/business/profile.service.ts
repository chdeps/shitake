import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { ProfileDto } from '@shitake/microservice-profile/domain/dto';
import { CreateProfileCommand } from '@shitake/microservice-profile/business/command';

@Injectable()
export class ProfileService {
  public constructor(private readonly commandBus: CommandBus) {}

  public async createProfile(userDto: ProfileDto) {
    return this.commandBus.execute(new CreateProfileCommand(userDto));
  }
}
