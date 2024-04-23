export interface UserDTO {
    id: number;
    customerId: string;
    name: string;
    address: string;
    phone: string;
    idCard: string;
}

export interface BankTransferDTO {
    id: number;
    timestamp: string;
    source: null | UserDTO;
    destination: null | UserDTO;
    amount: number;
}