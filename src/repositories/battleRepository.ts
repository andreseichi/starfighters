import { connection } from "../database/postgres";

export async function updateVictory(user: string) {
  const result = await connection.query(
    `
    UPDATE users
    SET wins = wins + 1
    WHERE username = $1
    `,
    [user]
  );

  return result.rows;
}

export async function updateDefeat(user: string) {
  const result = await connection.query(
    `
    UPDATE users
    SET losses = losses + 1
    WHERE username = $1
    `,
    [user]
  );

  return result.rows;
}

export async function updateDraw(user: string) {
  const result = await connection.query(
    `
    UPDATE users
    SET draws = draws + 1
    WHERE username = $1
    `,
    [user]
  );

  return result.rows;
}
