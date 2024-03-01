import { Router } from "express";
import { regTicket } from "../controllers/createTickets";

export default (router: Router) =>{
    router.post("/createTicket", regTicket);
};