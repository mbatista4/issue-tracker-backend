import {Router} from 'express';
import register from './register';
import tickets from './tickets'

const router = Router();

export default () : Router =>{
    register(router);
    tickets(router);
    return router;
};