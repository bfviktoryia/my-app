import { Pagination } from "@mui/material";
import ResponseInfoType from "../types/ResponseInfoType";
import { SetPage } from "./CardsFilterActionCreators";
import CardsFilterType from "./GalleryFilterType";

import "./GalleryPagination.scss"

type CardType = {
    info: ResponseInfoType,
    dispatch: any,
    state: CardsFilterType,
};
const GalleryPagination: React.FC<CardType> = ({info, state, dispatch}) => {

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
                // count={Math.ceil(info.total / state.limit)}
                count={Math.ceil(200/ state.limit)}
                // count={10}
                page={state.page}
                onChange={handleChangePage}
            /> 
      </div>
    );
  };
  
  export default GalleryPagination;
  

