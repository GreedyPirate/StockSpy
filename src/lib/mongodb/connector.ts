import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// 确保在全局对象中声明缓存变量，避免重复连接
declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;

if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    // 1. 检查 URI
    if (!MONGODB_URI) throw new Error('MONGODB_URI must be set within .env');

    // 2. 如果已有连接，直接返回缓存的连接
    if (cached.conn) {
        // console.log('Using cached database connection.');
        return cached.conn;
    }

    // 3. 如果没有正在进行的连接 Promise，则创建新的 Promise
    if (!cached.promise) {
        const options = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, options)
            .then(m => {
                // 成功连接后，设置 conn 
                cached.conn = m;
                if (process.env.NODE_ENV !== 'production') {
                    console.trace(`Connected to database: ${MONGODB_URI.substring(0, 30)}...`);
                }
                return m;
            });
    }

    // 4. 等待连接完成 (无论是新的还是正在进行的)
    try {
        // await cached.promise 也会设置 cached.conn
        const conn = await cached.promise;
        return conn;
    } catch (err) {
        // 如果连接失败，清空 promise，允许下次尝试
        cached.promise = null;
        throw err;
    }
}