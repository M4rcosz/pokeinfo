interface IPokeInfo {
    dataApi: any // Ajustar
}

const PokeInfo = ({ dataApi: data }: IPokeInfo) => {
    if (data) {
        return (
            <>
                {data.name}
                <img src={data.sprites.front_default} alt="" />
            </>
        )
    }
}

export default PokeInfo