import { AppDataSource } from './../data-source';
import { User } from '@entities/Users'

const getUser = async (params) => {   
    const user = await AppDataSource.getRepository(User).find({
        select: {
            username: true,
            password: true,
        },
        relations: {
            accountId: true
        },
        where: {
            username: params
        }
    })
    
    return user
}

export { getUser }