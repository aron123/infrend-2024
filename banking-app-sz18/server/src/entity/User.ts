import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { UserDTO } from "../../../models";
import { BankTransfer } from "./BankTransfer";

@Entity()
export class User implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    idCard: string;

    @OneToMany(type => BankTransfer, transaction => transaction.source)
    outgoingTransactions: BankTransfer[];

    @OneToMany(type => BankTransfer, transaction => transaction.destination)
    incomingTransactions: BankTransfer[];
}
