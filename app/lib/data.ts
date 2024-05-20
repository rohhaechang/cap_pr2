import { createPool } from '@vercel/postgres';

export async function fetchData() {
  const pool = createPool({
    connectionString: process.env.capstone_postgresql_URL
  })

  const data = await pool.sql`
  SELECT company_cik, name, year
  from table1
  where year=2023
  `
  return data
}

export async function fetchDataByCik(cik: string) {
  const pool = createPool({
    connectionString: process.env.capstone_postgresql_URL
  })

  const data = await pool.sql`
  SELECT company_cik, name, year
  from table1
  where company_cik=${cik} and year=2023
  `
  return data
}