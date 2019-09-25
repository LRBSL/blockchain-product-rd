import * as express from 'express';
import { 
    CarController_create_post,
    CarController_get_get } from './controllers'
export default express.Router()
.post('/car/create', CarController_create_post)
.get('/car/get/:id', CarController_get_get)
