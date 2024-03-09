import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createIssue(
    @Body() request: { id: string; title: string; description: string }
  ) {
    return this.appService.createIssue(request);
  }

  @Patch(':id')
  updateIssue(
    @Param('id') id: string,
    @Body() request: { id: string; title: string; description: string }
  ) {
    return this.appService.updateIssue(id, request);
  }

  @Delete(':id')
  deleteIssue(@Param('id') id: string) {
    return this.appService.deleteIssue(id);
  }
}
