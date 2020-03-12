import { IsEmail, IsNotEmpty, IsInt, IsAlpha } from 'class-validator';


export class ValidateProductDto {
  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public price: number; 

  @IsAlpha()
  @IsNotEmpty()
  public title: string;

}
