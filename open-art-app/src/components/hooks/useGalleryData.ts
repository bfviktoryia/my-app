import CardType from "../types/CardType";
import useDataRequest from "./useDataRequest";

const URL = 'https://openaccess-api.clevelandart.org/api/artworks/?limit=10';

type DataInfoType = {
      total: number,
}

type DataResponse = {
      info: DataInfoType,
      data: CardType[],
}

const defValue: DataResponse = {
      info: {total: 0},
      data: [],
}

const useGalleryData = (page: number, limit: number) => {
      const offset = limit * (page - 1);
      const url = `${URL}&offset=${offset}`;

  return useDataRequest<DataResponse>(defValue, url);

}
export default useGalleryData;