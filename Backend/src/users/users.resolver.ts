import { Resolver, Args, Query, Mutation, Int } from "@nestjs/graphql";
import { User } from "./models/user";
import { UsersService } from "./users.service";
import { GetUserArgs } from "./dto/getUser.args";
import { GetUsersArgs } from "./dto/getUsers.args";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { DeleteUserInput } from "./dto/deleteUser.input";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersSerive: UsersService) {}

    @Query(() => User, {name: 'user', nullable: true})
    getUser(@Args() getUserAgrs: GetUserArgs ): Promise<User> {
        return this.usersSerive.getUser(getUserAgrs);
    } 

    @Query(() => [User], {name: 'users', nullable: true})
    getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
        return Promise.all(this.usersSerive.getUsers(getUsersArgs))
    }

    @Query(() => [User])
    getAllUsers(): Promise<User[]>{
        return this.usersSerive.getAllUsers();
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): Promise<User>{
        return this.usersSerive.createUser(createUserData)
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): Promise<User> {
        return this.usersSerive.updateUser(updateUserData)
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): Promise<User>{
        return this.usersSerive.deleteUser(deleteUserData)
    }
}