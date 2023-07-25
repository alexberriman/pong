import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { db } from '../database/db';

const notFound = (res: Response) => res.status(404);

const isRelativeUrl = (url: string): boolean => url.startsWith('/');

const getContentType = (filePath: string): string => {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
};

const sendFile = async (res: Response, filePath: string) => {
  const content = await fs.promises.readFile(filePath);
  res.set('Content-Type', getContentType(filePath));
  res.send(content);
};

const outputDefaultImage = async (res: Response) => {
  const defaultPath = `${__dirname}/assets/images/default.png`;
  await sendFile(res, defaultPath);
};

const fromRelativeUrl = async ({
  path,
  res,
}: {
  path: string;
  res: Response;
}) => {
  const localPath = `${__dirname}${path}`;
  try {
    await sendFile(res, localPath);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn(`Error occurred sending profile pic: ${e.message}`);
    }
    await outputDefaultImage(res);
  }
};

export const getUserProfilePicture = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = db.$.get(userId).data;
  if (!user) {
    return notFound(res);
  }

  const { profilePicture = '' } = user;

  if (isRelativeUrl(profilePicture)) {
    return fromRelativeUrl({ res, path: profilePicture });
  }

  return outputDefaultImage(res);
};
