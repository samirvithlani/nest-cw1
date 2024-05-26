import { Controller, Get, Post, Req } from '@nestjs/common';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { AppService } from './app.service';
import { v2 as cloudinary } from 'cloudinary';
import { multerConfig } from './multer.config';

@ApiTags("users")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/users")
  getAllUsers(): any {
    return this.appService.getAllUsers();
  }

  @Post("/users")
  addUser(@Req() req): any {

    console.log(req.body);
    return this.appService.addUser(req.body);

  }

  cloudinaryHandler = async (file) => {
    cloudinary.config({
      cloud_name: "dpjoxqisl",
      api_key: "292199526794599",
      api_secret: "KKZHWhEwjA1Q0zUx4gVfcsvcVRY"
    })

    return await cloudinary.uploader.upload(file.path);

  }

  @Post("/file")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  async handleUpload(@UploadedFile() file: Express.Multer.File) {
    try {
      console.log(file);
      var result = await this.cloudinaryHandler(file);
      console.log(result);
      return file;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


}
