import { ArgsType, Field } from "@nestjs/graphql"
import { IsNotEmpty, IsArray } from "class-validator"

@ArgsType()
export class GetUsersArgs {
    @Field(() => [String])
    @IsNotEmpty()
    @IsArray()
    userIds: string[]
}