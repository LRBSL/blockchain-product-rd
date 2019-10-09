import { Request, Response } from 'express';
import { LandControllerBackEnd } from '../convector';


export async function LandController_init_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await LandControllerBackEnd
                .init());
            
    } catch(ex) {
        console.log('Error post LandController_init', ex.stack);
        res.status(500).send(ex);
    }
}
export async function LandController_queryLand_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await LandControllerBackEnd
            .queryLand(params.id));
        
    } catch(ex) {
        console.log('Error get LandController_queryLand', ex.stack);
        res.status(500).send(ex);
    }
}
export async function LandController_queryAllLands_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await LandControllerBackEnd
            .queryAllLands());
        
    } catch(ex) {
        console.log('Error get LandController_queryAllLands', ex.stack);
        res.status(500).send(ex);
    }
}
export async function LandController_createLand_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await LandControllerBackEnd
                .createLand(params.land));
            
    } catch(ex) {
        console.log('Error post LandController_createLand', ex.stack);
        res.status(500).send(ex);
    }
}
export async function LandController_changeLandOwner_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await LandControllerBackEnd
                .changeLandOwner(params.id,params.owner));
            
    } catch(ex) {
        console.log('Error post LandController_changeLandOwner', ex.stack);
        res.status(500).send(ex);
    }
}
export async function LandController_getHistoryForLand_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await LandControllerBackEnd
            .getHistoryForLand(params.id));
        
    } catch(ex) {
        console.log('Error get LandController_getHistoryForLand', ex.stack);
        res.status(500).send(ex);
    }
}