import { AppDataSource } from './../data-source';
import { Transaction } from '@entities/Transactions'

const getTransactions = async (params) => {    
    const result = await AppDataSource.getRepository(Transaction).find({
        select: {
            creditedAccountId: true,
            debitedAccountId: true,
            value: true,
            createdAt: true
        },
        relations: {
            creditedAccountId: true,
            debitedAccountId: true
        },
        where: {
            creditedAccountId: params
        }
    })
    console.log(result);
    
    return result
}

export { getTransactions }