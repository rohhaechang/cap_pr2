import { createPool } from '@vercel/postgres';

export async function fetchData() {
  const pool = createPool({
    connectionString: "postgres://default:Dn7JI9jOUGyV@ep-yellow-brook-a4fzyued-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
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
    connectionString: "postgres://default:Dn7JI9jOUGyV@ep-yellow-brook-a4fzyued-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
  })

  const data = await pool.sql`
  SELECT company_cik, name, year, item_1, item_1a, item_2, item_3, item_5, item_7, item_7a, item_8, summary
  from table1
  where company_cik=${cik} and year=2023
  `
  return data
}

// query 최신순 group by company_cik, having year
// langchain 짜기
// 프론트 디자인