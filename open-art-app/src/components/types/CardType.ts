//data.images.web.url

type ImagesType = {
    web: {url: string}
}

type CardType = {
    data: CardType,
    id: number,
    images?: ImagesType,
    title: string,
    creators: string,
    creation_date: number | string,
    culture: string,
    technique: string,
    type: string,
    fun_fact?: string,
    wall_description?: string,
    }
    
    
    export default CardType;