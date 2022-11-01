export enum AccountName {
    Projetos = "PROJETOS_M",

}

export interface IPrjDB {
    folder_last_project_id: number,
    date_at: string,
    members_user_name: string,
    start_time: string,
    duration: number,
    observation: null,
    account_name: AccountName,
    centro_de_custo: string,
    cod: string,
    organizacao: string,
    Status_legado: null,
    cod_proj: string,
    desc_proj: string
}

export class Prj {
    constructor(
        private folder_last_project_id: number,
        private date_at: string,
        private members_user_name: string,
        private start_time: string,
        private duration: number,
        private account_name: AccountName,
        private centro_de_custo: string,
        private cod: string,
        private organizacao: string,
        private cod_proj: string,
        private desc_proj: string
    ) { }

    public getFolderLastProjectId = () => {
        return this.folder_last_project_id
    }
    public getDateAt = () => {
        return this.date_at
    }
    public getMemberUserName = () => {
        return this.members_user_name
    }
    public getStartTime = () => {
        return this.start_time
    }
    public getDuration = () => {
        return this.duration
    }
    public getAccountName = () => {
        return this.account_name
    }
    public getCentroDeCusto = () => {
        return this.centro_de_custo
    }
    public getCod = () => {
        return this.cod
    }
    public getOrganizacao = () => {
        return this.organizacao
    }
    public getCodProj = () => {
        return this.cod_proj
    }
    public getDescProj = () => {
        return this.desc_proj
    }
    public setFolderLastProjectId = (newFolderLastProjectId: number) => {
        this.folder_last_project_id = newFolderLastProjectId
    }
    public setDateAt = (newDateAt: string) => {
        this.date_at = newDateAt
    }
    public setMemberUserName = (newMemberUserName: string) => {
        this.members_user_name = newMemberUserName
    }
    public setStartTime = (newStartTime: string) => {
        this.start_time = newStartTime
    }
    public setDuration = (newDuration: number) => {
        this.duration = newDuration
    }
    public setAccountName = (newAccountName: AccountName) => {
        this.account_name = newAccountName
    }
    public setCentroDeCusto = (newCentroDeCusto: string) => {
        this.centro_de_custo = newCentroDeCusto
    }
    public setCod = (newCod: string) => {
        this.cod = newCod
    }
    public setOrganizacao = (newOrganizacao: string) => {
        this.organizacao = newOrganizacao
    }
    public setCodProj = (newCodProj: string) => {
        this.cod_proj = newCodProj
    }
    public setDescProj = (newDescProj: string) => {
        this.desc_proj = newDescProj
    }
}


export interface IPostInputDTO {
    date_at: string,
    members_user_name: string,
    start_time: string,
    duration: number,
    account_name: AccountName,
    centro_de_custo: string,
    organizacao: string,
    cod_proj: string,
    desc_proj: string
}