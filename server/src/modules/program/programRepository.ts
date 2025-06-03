import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class programRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, synopsis, poster, country, year FROM program",
    );

    return rows as Program[];
  }
}

export default new programRepository();
