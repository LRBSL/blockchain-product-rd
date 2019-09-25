import { Request, Response } from 'express';
import { CarControllerBackEnd } from '../convector';


export async function CarController_create_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await CarControllerBackEnd
                .create(params.car));
            
    } catch(ex) {
        console.log('Error post CarController_create', ex.stack);
        res.status(500).send(ex);
    }
}
export async function CarController_get_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await CarControllerBackEnd
            .get(params.id));
        
    } catch(ex) {
        console.log('Error get CarController_get', ex.stack);
        res.status(500).send(ex);
    }
}