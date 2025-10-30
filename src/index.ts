import express from 'express';
import http from 'http'

import {Server} from 'socket.io'
import { initRedis } from './config/redis.ts';

const app = express();

const port = process.env.PORT || 3000;
const server = http.createServer(app)
const io = new Server(server,{cors:{origin:'*'}})

initRedis();

app.use(express.json());
// app.use('/api', routes);

io.on('connection', socket => {
    console.log('🟢 User connected');
    socket.on('disconnect', () => console.log('🔴 User disconnected'));
  });
  
export { app, server };
