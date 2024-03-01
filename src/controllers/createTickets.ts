import express, {Request, Response} from "express";
import { createTicket } from "../db/tickets";

export const regTicket = async (req: Request, res: Response) => {

    try{
        const { title, description, devAssigned, priority} = req.body;

        if(!title || !description || !devAssigned || !priority){
            return res.sendStatus(400);
        }

        const ticket = await createTicket({
            title,
            description,
            devAssigned,
            priority
        });

        return res.status(200).json(ticket).end();
    } catch(error){
        console.log(error);
        res.sendStatus(400);   
    }
}