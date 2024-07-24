"use server"
import http from "@/http";

const getPokeInfo = async (searchValue: string) => {
    try {
        const req = await http.get(searchValue.toLowerCase())
        const res = req.data
        return res
    }
    catch (error) {
        console.log(error)
    }
}

export default getPokeInfo