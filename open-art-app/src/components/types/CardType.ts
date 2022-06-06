//data.images.web.url

export type ImagesType = {
    web: {url: string}
}

export type CreatorsType = {
    description: string
}

type CardType = {
    id: number,
    images?: ImagesType,
    title: string,
    creation_date: number | string,
    culture: string,
    technique: string,
    type: string,
    fun_fact?: string,
    wall_description?: string,
    // exhibitions: 
    creators: CreatorsType[]
    }

    
    
    export default CardType;