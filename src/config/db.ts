import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.DATABASE_URL as string;

    if (!mongoUri) {
      throw new Error('No se encontró MONGO_URI en el archivo .env');
    }

    await mongoose.connect(mongoUri);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};
