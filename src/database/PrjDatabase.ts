import { IPrjDB, Prj } from "../models/Prj"
import { BaseDatabase } from "./BaseDatabase"

export class PrjDatabase extends BaseDatabase {
    public static TABLE_PRJ = "prj_erp" //////////////////////////

    public getPrj = async () => {
        const prjsDB: IPrjDB[] = await BaseDatabase
            .connection(PrjDatabase.TABLE_PRJ)
            .select()

        return prjsDB[0]
    }

    public findByCod = async (cod: string) => {
        const prjsDB: IPrjDB[] = await BaseDatabase
            .connection(PrjDatabase.TABLE_PRJ)
            .select()
            .where({ cod })

        return prjsDB[0]
    }

    public editPrj = async (prj: Prj) => {
        const prjDB: IPrjDB = {
            folder_last_project_id: prj.getFolderLastProjectId(),
            date_at: prj.getDateAt(),
            members_user_name: prj.getMemberUserName(),
            start_time: prj.getStartTime(),
            duration: prj.getDuration(),
            observation: null,
            account_name: prj.getAccountName(),
            centro_de_custo: prj.getCentroDeCusto(),
            cod: prj.getCod(),
            organizacao: prj.getOrganizacao(),
            Status_legado: null,
            cod_proj: prj.getCodProj(),
            desc_proj: prj.getDescProj()
        }

        await BaseDatabase
            .connection(PrjDatabase.TABLE_PRJ)
            .where({ cod: prjDB.cod })
            .update(
                {
                    folder_last_project_id: prjDB.folder_last_project_id,
                    date_at: prjDB.date_at,
                    members_user_name: prjDB,
                    start_time: prjDB.start_time,
                    duration: prjDB.duration,
                    observation: null,
                    account_name: prjDB.account_name,
                    centro_de_custo: prjDB.centro_de_custo,
                    cod: prjDB.cod,
                    organizacao: prjDB.organizacao,
                    Status_legado: null,
                    cod_proj: prjDB.cod_proj,
                    desc_proj: prjDB.desc_proj
                }
            )

    }

    public createPrj = async (prj: Prj) => {
        const prjDB: IPrjDB = {
            folder_last_project_id: prj.getFolderLastProjectId(),
            date_at: prj.getDateAt(),
            members_user_name: prj.getMemberUserName(),
            start_time: prj.getStartTime(),
            duration: prj.getDuration(),
            observation: null,
            account_name: prj.getAccountName(),
            centro_de_custo: prj.getCentroDeCusto(),
            cod: prj.getCod(),
            organizacao: prj.getOrganizacao(),
            Status_legado: null,
            cod_proj: prj.getCodProj(),
            desc_proj: prj.getDescProj()
        }

        await BaseDatabase
            .connection(PrjDatabase.TABLE_PRJ)
            .insert(prjDB)
    }

}