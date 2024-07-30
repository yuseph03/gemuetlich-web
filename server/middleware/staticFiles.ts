import express from 'express';
import path from 'path';

export const serveStaticFiles = (app: express.Express) => {
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
};
