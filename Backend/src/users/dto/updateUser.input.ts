import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    _id: string;

    @Field({ nullable: true })
    @IsOptional()
    name?: string

    @Field({ nullable: true })
    @IsOptional()
    email?: string

    @Field({ nullable: true })
    @IsOptional()
    address?: string

    @Field({ nullable: true })
    @IsOptional()
    phone?: string
}