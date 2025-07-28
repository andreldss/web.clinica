import mysql, { Connection } from 'mysql2/promise.js'


let connection: Connection | null = null

export const createConnection = async (): Promise<Connection> => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        })
    }

    return connection;
}

export async function query(sql: string, params: any[] = []): Promise<any[]> {
  const db = await createConnection()
  const [result] = await db.execute(sql, params)
  
  return result as any[]
}