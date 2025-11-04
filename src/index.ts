import express from 'express';
import http from 'http'
import {Server} from 'socket.io'
import indexRoutes from './modules/index.routes.ts';

const app = express();

const server = http.createServer(app)
const io = new Server(server,{cors:{origin:'*'}})


app.use(express.json());
app.use('/api', indexRoutes);

io.on('connection', socket => {
    console.log('🟢 User connected');
    socket.on('disconnect', () => console.log('🔴 User disconnected'));
  });

app.get('/', (req, res) => {
    res.send('Servidor activo con Socket.io + BullMQ 🧠');
  });
  
export { app, server };
