import {sendEmail} from '../utils/mailer.ts'
import { getRedis } from '../config/redis.ts';
import type { EmailJobData } from '../interfaces/job.interface.ts';
import { Worker } from 'bullmq';
const connection = getRedis();


export const emailWorker = new Worker<EmailJobData>(
    'emailQueue',
    async (job) => {
      console.log('📨 Procesando job:', job.id);
  
      const { to, subject, html } = job.data;
  
      // Aquí usamos la función que ya probamos antes
      await sendEmail(to, subject, html);
  
      console.log('✅ Correo enviado correctamente para:', to);
    },
    {
      connection: connection,
    }
  );
  
  
  // Eventos para monitorear el estado del worker
  emailWorker.on('completed', (job) => {
    console.log(`🎉 Job completado: ${job.id}`);
  });
  
  emailWorker.on('failed', (job, err) => {
    console.error(`❌ Job falló: ${job?.id}`, err);
  });