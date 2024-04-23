import { AppDataSource } from "../data-source";
import { BankTransfer } from "../entity/BankTransfer";
import { Controller } from "./base.controller";

export class TransactionController extends Controller {
    repository = AppDataSource.getRepository(BankTransfer);

    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            delete entity.id;
            delete entity.timestamp;

            // TODO: összeg 0 feletti-e?

            // TODO: külső létezik-e?

            // TODO: cél létezik-e?

            // TODO: küldő és cél megegyezik-e?

            const entityInserted = await this.repository.save(entity);
            res.json(entityInserted);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    transactionsByUser = async (req, res) => {
        try {
            const userId = req.params.userId;

            const transactions = await this.repository.findBy({
                source: { id: userId } 
            });

            res.json(transactions);
        } catch (err) {
            this.handleError(res, err);
        }
    }
}