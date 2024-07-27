"use client"
import { useState } from "react";
import PokeInfo from "./components/Section/PokeInfos";
import InputSearchAutoComplete from "./components/Input/InputSearchAutoComplete";


const Home = () => {
  const [apiData, setApiData] = useState();

  return (
    <>
      <header className="flex justify-center my-12">
        <h1 className="text-4xl mx-auto">PokéInfo</h1>
      </header>

      <main className="flex items-center flex-col gap-10 w-96 mx-auto border rounded-md py-8 border-yellow-800">

        <InputSearchAutoComplete
          setApiData={setApiData}
        />

        <PokeInfo
          apiData={apiData}
        />

      </main>
    </>
  );
}

export default Home