import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,       
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }


    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if ((!email && typeof(email) == 'string') || (!password && typeof(password) == 'string')) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB) {
            throw new Error("Email não cadastrado")
        }

        const user = new User(
            userDB.id,       
            userDB.email,
            userDB.password    
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId()            
        }

        const token = this.authenticator.generateToken(payload)

        return {message: "Login realizado com sucesso", token}

    }
}