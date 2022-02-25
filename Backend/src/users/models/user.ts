import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field({nullable: true})
    _id: string;

    @Field()
    name: string

    @Field()
    email: string;

    @Field({nullable: true})
    address: string;

    @Field({nullable: true})
    phone: string;
}