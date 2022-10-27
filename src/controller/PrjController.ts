import { PrjBusiness } from "../business/PrjBusiness";
import { Request, Response } from "express";
import { ILoginInputDTO } from "../models/User";
import { IPostInputDTO } from "../models/Prj";

export class PrjController {
    constructor(
        private prjBusiness: PrjBusiness
    ) {}

    public postPrj = async (req: Request, res: Response) => {
        try {
            const input: IPostInputDTO = {
                folder_last_project_id: req.body.folder_last_project_id,
                date_at: req.body.date_at,
                members_user_name: req.body.members_user_name,
                start_time: req.body.start_time,
                duration: req.body.duration,                
                account_name: req.body.account_name,
                centro_de_custo: req.body.centro_de_custo,                
                organizacao: req.body.organizacao,                
                cod_proj: req.body.cod_proj,
                desc_proj: req.body.desc_proj
            }

            const response = await this.prjBusiness.postPrj(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public editPrj = async (req: Request, res: Response) => {
        try {
            const input: any = {
                cod: req.headers.cod,
                folder_last_project_id: req.body.folder_last_project_id,
                date_at: req.body.date_at,
                members_user_name: req.body.members_user_name,
                start_time: req.body.start_time,
                duration: req.body.duration,                
                account_name: req.body.account_name,
                centro_de_custo: req.body.centro_de_custo,                
                organizacao: req.body.organizacao,                
                cod_proj: req.body.cod_proj,
                desc_proj: req.body.desc_proj
            }

            const response = await this.prjBusiness.editPrj(input)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPrj = async (req: Request, res: Response) => {
        try {
            const response = await this.prjBusiness.getPrj()

            res.status(200).send(response)            
        } catch (error: any) {
            res.status(400).send({ message: error.message })            
        }
    }

}