// __tests__/lib/mongodb.test.ts
import { connectToDatabase } from '@/lib/mongodb/connector';
import mongoose from 'mongoose';

// 清理：每个测试后断开连接（避免 Jest 警告）
afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
});

// 重置全局缓存，避免测试间污染
beforeEach(() => {
  (global as any).mongooseCache = { conn: null, promise: null };
});

describe('MongoDB Connection', () => {
  test('should connect to MongoDB Atlas successfully', async () => {
    const conn = await connectToDatabase();
    expect(conn.connection.readyState).toBe(1); // 1 = connected
  }, 30000); // 增加超时（Atlas 连接较慢）

  test('should return cached connection on second call', async () => {
    const conn1 = await connectToDatabase();
    const conn2 = await connectToDatabase();
    expect(conn1).toBe(conn2);
  }, 30000);
});