import { useEffect, useState } from "react";

import ProgramCard from "../components/ProgramCard/programCard";

type ShowsType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function () {
  //useState to get data from fetch
  const [programs, setPrograms] = useState<ShowsType[]>([]);

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.log("Error :", error));
  }, []);

  return (
    <main>
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </main>
  );
}
