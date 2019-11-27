import { Controller, Get } from '@nestjs/common';
import { ItemService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private serv: ItemService) { }

    @Get()
    public async getAll() {
      return await this.serv.getAll();
    }
}
