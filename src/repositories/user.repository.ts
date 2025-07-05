import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequest } from 'src/dtos/user/create.user.request.dto';
import { UserRequest } from 'src/dtos/user/user.request.dto';
import { User } from 'src/entities/user.entity';
import { generateId } from 'src/utils';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //update user by query
  async updateAsync(query: any, request: User): Promise<User> {
    // return await this.userRepository.findOne({where:{id:}})
    return null;
  }

  //get by id
  async getById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  //get by email
  async getByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  //create user
  async create(request: CreateUserRequest): Promise<User> {
    const res = await this.userRepository.create({
      ...request,
      id: generateId(),
    });
    return await this.userRepository.findOne({ where: { id: res.id } });
  }

  //update user
  async update(id: string, request: UserRequest): Promise<User> {
    await this.userRepository.update({ id }, { ...request });
    return await this.userRepository.findOne({ where: { id } });
  }

  //delete user
  async delete(id: string): Promise<User> {
    var user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.delete({ id });
    return user;
  }
}
