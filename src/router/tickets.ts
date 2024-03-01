import { Router } from "express";
import { getAllTickets,deleteTicket, updateTicket, getSingleTicket } from "../controllers/tickets";

export default (router: Router) =>{
    router.get('/getTickets',getAllTickets);
    router.get('/tickets/:id',getSingleTicket);
    router.delete('/deleteTicket/:id', deleteTicket);
    router.patch('/tickets/:id',updateTicket);
}