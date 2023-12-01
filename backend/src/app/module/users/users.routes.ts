import express, { Router } from 'express'
import { UsersController } from './users.controllers';



const router:Router = express.Router();

router.post("/create-student", UsersController.createStudent)



export const UserRouter:Router = router;