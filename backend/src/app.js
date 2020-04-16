import 'dotenv/config';
import express from 'express';
import path, { join as pathJoin } from 'path';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import sentryConfig from './config/sentry';
import 'express-async-errors';
import staticConfig from './config/static';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.static();
    this.middlewares();
    this.routes();
    this.rewriteIndex();
    this.exceptionHandler();
  }

  static() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );

    this.server.use(
      '/static',
      express.static(pathJoin(__dirname, 'public/static'), staticConfig.static)
    );
    this.server.use(
      express.static(pathJoin(__dirname, 'public'), staticConfig.public)
    );

    // this.server.use(
    //   '/static',
    //   express.static(
    //     pathJoin(__dirname, 'public', 'static'),
    //     staticConfig.static
    //   )
    // );
    // this.server.use(
    //   express.static(pathJoin(__dirname, 'public'), staticConfig.public)
    // );
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', routes);
    // this.server.use(
    //   '/files',
    //   express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    // );
    // this.server.use(
    //   '/static',
    //   express.static(path.resolve(__dirname, '..', 'public', 'static'))
    // );
    // this.server.use(express.static(path.resolve(__dirname, '..', 'public')));
    // this.server.get('*', (req, res) =>
    //   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
    // );
    this.server.use(Sentry.Handlers.errorHandler());
  }

  rewriteIndex() {
    // if (process.env.NODE_ENV === 'development') {
    //   this.server.get('/*', (req, res) =>
    //     res.redirect(process.env.APP_FRONTEND_URL)
    //   );
    //   return;
    // }
    this.server.get(
      '/*',
      (req, res, next) => {
        req.url = '/';
        next();
      },
      express.static(pathJoin(__dirname, 'public'), staticConfig.public)
    );
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
