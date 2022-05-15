import { useState, useEffect} from "react";
import CardType from "../types/CardType";
import useDataRequest from "./useDataRequest";

const URL = 'https://openaccess-api.clevelandart.org/api/artworks/?limit=20&offset=0';

type DataResponse = {
      info?: {},
      data: CardType[]
}

const defValue: DataResponse = {
      info: {},
      data: []
}

const useGalleryData = () => {

  const { response, loading, error } = useDataRequest<DataResponse>(defValue, URL)

    return {response, loading, error};
}
export default useGalleryData;