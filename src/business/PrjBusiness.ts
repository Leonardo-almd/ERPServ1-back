import { hash } from "bcryptjs"
import { PrjDatabase } from "../database/PrjDatabase"
import { IPrjDB, Prj, AccountName, IPostInputDTO } from "../models/Prj"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PrjBusiness {
    constructor(
        private prjDatabase: PrjDatabase,
        private idGenerator: IdGenerator        
    ) { }


    public postPrj = async (input: IPostInputDTO) => {        
        const date_at = input.date_at
        const members_user_name = input.members_user_name
        const start_time = input.start_time
        const duration = input.duration
        const account_name = input.account_name
        const centro_de_custo = input.centro_de_custo        
        const organizacao = input.organizacao
        const cod_proj = input.cod_proj
        const desc_proj = input.desc_proj 
        const cod = this.idGenerator.generate() 
        
        const folder_last_project_id = () => {
            if(organizacao == "AUSTER") {
                return 3883016
            }
            if(organizacao == "PROMAX") {
                return 3885061
            } 
        }

        const prj = new Prj(
            ,
            date_at,
            members_user_name,
            start_time,
            duration,
            account_name,
            centro_de_custo,
            cod,
            organizacao,
            cod_proj,
            desc_proj
        )

        await this.prjDatabase.createPrj(prj)

        return "Prj cadastrado com sucesso" 
    }


    public editPrj = async (input: any) => {
        const cod = input.cod         

        const prjDB = await this.prjDatabase.findByCod(cod)

        if (!prjDB) {
            throw new Error("PRJ não cadastrado")
        }

        const prj = new Prj(
            input.folder_last_project_id,
            input.date_at,
            input.members_user_name,
            input.start_time,
            input.duration,
            input.account_name,
            input.centro_de_custo,
            cod,
            input.organizacao,
            input.cod_proj,
            input.desc_proj        
        )

        await this.prjDatabase.editPrj(prj)        

        return "Prj editada com sucesso"

    }

    public getPrj = async () => {
        const prjs = await this.prjDatabase.getPrj()

        return prjs
    }

    public getPrjByCod = async (input: any) => {
        const prj = await this.prjDatabase.findByCod(input.cod)

        if (!prj) {
            throw new Error("PRJ não encontrado")
        }

        return prj
    }
}