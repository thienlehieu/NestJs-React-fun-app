import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field({nullable: true})
    _id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    email: string;

    @Field({nullable: true})
    address: string;

    @Field({nullable: true})
    phone: string;
}