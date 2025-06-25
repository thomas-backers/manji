import type { Request, Response } from "express";

const post = async (req: Request, res: Response): Promise<void> => {
  const body: unknown = req.body;
};

export default post;
