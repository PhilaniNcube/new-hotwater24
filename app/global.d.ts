import type {Database as DB } from '@/schema.ts'

declare global {
  type Database = DB
}
