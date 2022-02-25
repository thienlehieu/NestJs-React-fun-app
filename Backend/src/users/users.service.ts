import { Injectable } from "@nestjs/common";
import { User } from "./models/user";
import { GetUserArgs } from "./dto/getUser.args";
import { GetUsersArgs } from "./dto/getUsers.args";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { DeleteUserInput } from "./dto/deleteUser.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
    //private users: User[] = [];
    constructor(@InjectModel('User') private readonly userModel:Model<User>) {}

    async createUser(createUserData: CreateUserInput): Promise<User> {
        // const user: User = {
        //     userID: uuid(),
        //     ...createUserData
        // }
        // users.push(user)
        const newUser = new this.userModel(createUserData)
        return await newUser.save();
    };

    async updateUser(updateUserData: UpdateUserInput): Promise<User> {
        // const user: User = users.find(user => user._id === updateUserData._id)
        // Object.assign(user, updateUserData)
        return await this.userModel.findByIdAndUpdate(updateUserData._id, updateUserData, {new: true})
    };

    async getUser(getUserArgs: GetUserArgs): Promise<User> {
        //return users.find(user => user._id === getUserArgs.userId)
        return await this.userModel.findById(getUserArgs)
    };

    public getUsers(getUsersArgs: GetUsersArgs): Promise<User>[] {
        return getUsersArgs.userIds.map(id => {
            console.log(id)
            return this.getUser({_id: id})});
    };

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find()
    }

    async deleteUser(deleteUserData: DeleteUserInput): Promise<User> {
        // const userIndex = users.findIndex(user => user._id === deleteUserData.userId)
        // const user = users[userIndex]
        // users.splice(userIndex)
        return await this.userModel.findByIdAndRemove({_id: deleteUserData._id})
    }
}