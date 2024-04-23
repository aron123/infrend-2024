import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankTransferDTO, UserDTO } from "../../../models";
import { User } from "./User";

@Entity()
export class BankTransfer implements BankTransferDTO {
    
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    timestamp: string;

    @ManyToOne(type => User, user => user.outgoingTransactions, { eager: true })
    source: UserDTO;

    @ManyToOne(type => User, user => user.incomingTransactions, { eager: true })
    destination: UserDTO;

    @Column()
    amount: number;

}