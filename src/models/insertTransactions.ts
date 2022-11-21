import { AppDataSource } from './../data-source';
import { Transaction } from '@entities/Transactions'

const insertTransaction = async (debitedAccountId, creditedAccountId, value) => {
    const result = await AppDataSource.createQueryBuilder().insert().into(Transaction).values({
        debitedAccountId,
        creditedAccountId,
        value
    }).execute()

    return result
}

export { insertTransaction }