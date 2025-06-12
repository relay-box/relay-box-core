import { Database } from 'bun:sqlite'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import * as schema from './schema'

const sqlite = new Database(process.env.DATABASE_URL ?? 'sqlite.db')
const db = drizzle(sqlite, { schema })
migrate(db, { migrationsFolder: './drizzle' })

export { db }
