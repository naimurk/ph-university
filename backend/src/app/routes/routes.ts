import { Router } from "express";
import { UserRouter } from "../module/users/users.routes";


 export const router = Router();

 const moduleRoutes = [
    {
        path: "/users",
        route: UserRouter
    }
 ]
 moduleRoutes.forEach((route)=> router.use(route.path, route.route))

