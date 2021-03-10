import Head from "next/head";
import { useContext } from "react";

import { VersionContext } from "src/contexts/VersionContext";
import { Electron } from "../components/Electron";
import { Next } from "../components/Next";

function Home() {
  const { text } = useContext(VersionContext);
  return (
    <main>
      <Head>
        <title>Início</title>
      </Head>

      <Electron />
      <Next />
      {text}
    </main>
  );
}

export default Home;
