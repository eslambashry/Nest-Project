import { Body, Controller, Post } from '@nestjs/common';
import { Tags } from 'src/core/schema/tags.schema';
import { TagService } from './tag.service';
import { addTag } from '../DTO/dto.tags';

@Controller('add')
export class AddController {
    
    constructor(private _tagService:TagService){}

    @Post()
    addTag(@Body() body:addTag){
        return this._tagService.addTage(body)
    }
}
