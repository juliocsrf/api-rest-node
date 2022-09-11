import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import cors from 'cors';

import './database';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';
import photoRoutes from './routes/photoRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
        this.app.use((req, res, next) => {
            res.header('Cross-Origin-Resource-Policy', '*');
            next();
        });
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users', userRoutes);
        this.app.use('/tokens', tokenRoutes);
        this.app.use('/students', studentRoutes);
        this.app.use('/photos', photoRoutes);
    }
}

export default new App().app;
