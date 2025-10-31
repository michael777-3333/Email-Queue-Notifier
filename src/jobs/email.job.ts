import { createQueue } from '../config/bullmq.ts';
export const emailQueue = createQueue('emailQueue');

// Función para agregar jobs
export const sendEmailJob = async (data: { email: string }) => {
    await emailQueue.add('sendEmail', data);
  };