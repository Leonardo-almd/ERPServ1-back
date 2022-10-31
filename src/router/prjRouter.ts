import { Router } from 'express'
import { PrjBusiness } from '../business/PrjBusiness'
import { PrjController } from '../controller/PrjController'
import { PrjDatabase } from '../database/PrjDatabase'
import { IdGenerator } from '../services/IdGenerator'

export const prjRouter = Router()

const prjController = new PrjController(
    new PrjBusiness(
        new PrjDatabase(),
        new IdGenerator()       
    )
)

prjRouter.post("/create", prjController.postPrj)
prjRouter.put("/edit", prjController.editPrj)
prjRouter.get("/get", prjController.getPrj)
prjRouter.get("/search", prjController.getPrjByCod)