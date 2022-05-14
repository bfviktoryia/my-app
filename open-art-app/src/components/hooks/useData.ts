import { useState, useEffect} from "react";
import CardType from "../types/CardType";

const URL = 'https://openaccess-api.clevelandart.org/api/artworks/?limit=20&offset=0';

const useData = () => {
 //создание состояний для всех элементов
  //типизируем useState постов, чтобы указать, какое именно состояние будет использоваться^ не просто пустой массив, а массив с объектами постов
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  useEffect(() => {
    //запуск 1 раз, внутри useEffect с пустым массивом
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
        fetch(URL)
            .then((response) => response.json())
            .then((response) => {
                const cards = response.data as CardType[];
                setCards(cards);
            })
            //отлавливание ошибки
            .catch(() => {
                setError(true);
            })
            //прописываем, когда состояние loading должно закончится (когда данные пришли, никаких ошибок нет false)
            .finally(() => {
                setLoading(false);
            });
        
            console.log(Object.values(cards));
  };
    return {cards, loading, error};
}
export default useData;