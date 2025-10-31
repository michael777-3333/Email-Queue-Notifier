import { emailQueue } from './config/bullmq.ts';

(async () => {
  await emailQueue.add('sendEmail', {
    to: 'destinatario@gmail.com',
    subject: 'Correo desde BullMQ 😎',
    html: '<h1>Este correo fue agregado a la cola correctamente</h1>',
  });

  console.log('📬 Job agregado a la cola correctamente');
})();
