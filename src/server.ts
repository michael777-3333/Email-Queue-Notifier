import { server } from './index.ts';
import './jobs/index.ts';


const PORT = process.env.PORT || 3000;




server.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });