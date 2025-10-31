import Redis from 'ioredis';
import dotenv from 'dotenv'
dotenv.config();

let redis: Redis | null = null;

export const initRedis = (): void => {
  redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT || '6379') as number,
    password: process.env.REDIS_PASSWORD,
    lazyConnect: true,
    maxRetriesPerRequest: null
  });

  redis.on('connect', () => console.log('✅ Redis connected'));
  redis.on('error', (err: any) => console.error('❌ Redis error', err));
  redis.on('ready', () => console.log('🚀 Redis ready'));
};

export const getRedis = (): Redis => {
  if (!redis) {
    initRedis();
  }
  if (!redis) {
    throw new Error('Failed to initialize Redis client');
  }
  return redis;
};