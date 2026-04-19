import postgres from 'postgres'

const url = 'postgresql://postgres:postgres@127.0.0.1:55432/eonova'
console.log('url =', url)

const sql = postgres(url)

async function main() {
  try {
    const rows = await sql`select current_database() as db, current_user as "user"`
    console.log('连接成功：', rows)
  }
  catch (err) {
    console.error('连接失败：', err)
  }
  finally {
    await sql.end({ timeout: 1 }).catch(() => {})
  }
}

main()
