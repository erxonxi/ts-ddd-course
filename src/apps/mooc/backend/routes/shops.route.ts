import { Router, Response } from 'express';
import { ShopPutController } from '../controllers/Shops/ShopPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const controller: ShopPutController = container.get('Apps.mooc.controllers.ShopPutController');
  router.put('/shops', (req: any, res: Response) => controller.run(req, res));
};
