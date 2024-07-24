"use client"
import { useState } from "react";
import InputSearch from "./components/input/InputSearch";
import PokeInfo from "./components/section/PokeInfos";


const Home = () => {
  const [dataApi, setDataApi] = useState();

  return (
    <>
      <header className="flex justify-center my-12">
        <h1 className="text-4xl mx-auto">PokéInfo</h1>
      </header>

      <main className="flex items-center flex-col gap-10">

        <InputSearch
          setDataApi={setDataApi}
        />

        <PokeInfo
          dataApi={dataApi}
        />

      </main>
    </>
  );
}

export default Home