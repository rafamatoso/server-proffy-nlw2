import { Request, Response, response } from 'express';

import db from '../database/connection';

export default class ConnectionController {
  static async index(req: Request, res: Response): Promise<any> {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.json({ total });
  }

  static async create(req: Request, res: Response): Promise<any> {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id,
    });

    return res.status(201).send();
  }
}
