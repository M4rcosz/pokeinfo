import Image from "next/image";
import DownloadButton from "../Button/ButtonDownload";
// import SelectImage from "../Select/SelectImage";

interface IPokeInfo {
    apiData: any // Ajustar
}

const PokeInfo = ({ apiData: data }: IPokeInfo) => {

    if (data) {
        return (
            <>
                <div className="flex flex-col items-center rounded-t-md">
                    <Image
                        src={data.sprites.front_default}
                        alt={data.name}
                        width={100}
                        height={100}
                        quality={100}
                        className="scale-150"
                    />
                    <h2 className="capitalize py-1.5">{data.name}</h2>
                </div>
                {/* <SelectImage /> */}
                <DownloadButton
                    URL={data.sprites.front_default}
                    fileName={`${data.name}.png`}
                />
            </>
        )
    }
}


export default PokeInfo