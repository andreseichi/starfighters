import { connection } from "../database/postgres";

export async function updateUser(cardId: number) {
  const result = await connection.query(
    `
    `,
    []
  );

  return result.rows;
}
