import { server } from './index.ts';
import { connectDB } from './config/db.ts';

connectDB();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});