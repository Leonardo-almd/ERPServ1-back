export interface IUserDB {
    id: string,    
    email: string,
    password: string    
}

export class User {
    constructor(
        private id: string,        
        private email: string,
        private password: string        
    ) {}

    public getId = () => {
        return this.id
    }   

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }    
}


export interface ILoginInputDTO {
    email: string,
    password: string
}
