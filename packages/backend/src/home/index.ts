import type { Request, Response } from 'express';

const index = async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  });
};

export default index;
