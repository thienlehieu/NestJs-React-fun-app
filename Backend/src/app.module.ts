import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from "./users/config/key"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    MongooseModule.forRoot(config.mongoURL)
    ,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
