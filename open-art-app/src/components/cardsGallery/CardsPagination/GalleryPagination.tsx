import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import ResponseInfoType from "../../types/ResponseInfoType";
import { SetPage } from "../CardsFilter/CardsFilterActionCreators";
import CardsFilterType from "../CardsFilter/GalleryFilterType";

import "./GalleryPagination.scss"

type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};
const GalleryPagination: React.FC<CardType> = ({info, state, dispatch}) => {
  
    const total = useSelector((state: any)  => state.cards.info.total);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      dispatch(SetPage(value))
    }

    return (
      <div className="cards-pagination-wrap">
            <Pagination 
                className="pagination"
                size="small"
                shape="rounded"
                showFirstButton 
                showLastButton
                count={Math.ceil(total / state.limit)}
                page={state.page}
                onChange={handleChangePage}
            /> 
      </div>
    );
  };
  
  export default GalleryPagination;
  

