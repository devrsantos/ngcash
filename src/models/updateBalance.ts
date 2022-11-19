import { AppDataSource } from './../data-source';
import { Account } from '@entities/Accounts';

const updateBalance = (value, id) => {
    const newBalance = AppDataSource.createQueryBuilder()
    .update(Account)
    .set({
        balance: value
    })
    .where({id: id}).execute()

    return newBalance
}

export { updateBalance }