import { Request, Response } from "express";
import { getTickets, deleteTicketById, getTicketById } from "../db/tickets";

export const getAllTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await getTickets();
        
        return res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};

export const deleteTicket = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const deletedTicket = await deleteTicketById(id);

        return res.json(deletedTicket);
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const getSingleTicket = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const foundTicket = await getTicketById(id);

        return res.json(foundTicket);
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const updateTicket = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const { isResolved} = req.body;

        if(!isResolved){
            return res.sendStatus(400);
        }

        console.log(id);
        

        const ticket = await getTicketById(id);
        ticket.isResolved = isResolved;
        await ticket.save()

        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}