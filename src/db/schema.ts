import { sql } from 'drizzle-orm'
import { int, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable(
    'users',
    {
        id: int().primaryKey({ autoIncrement: true }),
        username: text().notNull(),
        email: text().notNull().unique(),
        password: text().notNull(),
        createdAt: text()
            .notNull()
            .default(sql`CURRENT_TIMESTAMP`),
        updatedAt: text()
            .notNull()
            .default(sql`CURRENT_TIMESTAMP`)
    },
    table => []
)

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
