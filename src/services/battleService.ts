import { api } from "../api/github";
import { Repository } from "../types/repository";

export async function getBattleResult(firstUser: string, secondUser: string) {
  try {
    const { data: firstUserRepos } = await api.get<Repository[]>(
      `/${firstUser}/repos`
    );

    const firstUserStars = firstUserRepos.reduce((acc, curr) => {
      return acc + curr.stargazers_count;
    }, 0);

    const { data: secondUserRepos } = await api.get<Repository[]>(
      `/${secondUser}/repos`
    );

    const secondUserStars = secondUserRepos.reduce((acc, curr) => {
      return acc + curr.stargazers_count;
    }, 0);

    if (firstUserStars === secondUserStars) {
      const response = {
        winner: null,
        loser: null,
        draw: true,
      };

      return response;
    }

    if (firstUserStars > secondUserStars) {
      const response = {
        winner: firstUser,
        loser: secondUser,
        draw: false,
      };

      return response;
    } else {
      const response = {
        winner: secondUser,
        loser: firstUser,
        draw: false,
      };

      return response;
    }
  } catch (error) {
    console.error("error");
  }
}
