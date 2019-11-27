import { Injectable } from '@nestjs/common';
import { Item } from './items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

    public async getAll() {
      return await this.repo.find();
    }
}
