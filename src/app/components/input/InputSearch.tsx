"use client"
import getPokeInfo from "@/app/api/getPokeInfo";
import { FormEvent, useState } from "react";

interface IInputSearch {
    setDataApi: (value: any) => void; // ajustar
}

const InputSearch = ({ setDataApi }: IInputSearch) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const formHandler = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const data = await getPokeInfo(searchValue)
        console.log(data)
        setDataApi(data)
    }

    return <form onSubmit={(evt) => formHandler(evt)} className="bg-white flex w-fit rounded overflow-hidden">
        <input type="text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className="px-2 text-black" />
        <button aria-label="Pesquisar" type="submit" className="bg-white w-10 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
    </form>
}

export default InputSearch