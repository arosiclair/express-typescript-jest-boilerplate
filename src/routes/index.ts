import express, { Request, Response } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.send('Hello, Express!');
});

export default router;
