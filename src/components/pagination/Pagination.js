import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs"

import './pagination.scss'
export default function Pagination(props) {
    const {onLeftClick, onRightClick, page, totalPages} = props;
      return ( <>
        <div className="pagination">
            <button onClick={onLeftClick}>
                <div> <BsFillArrowLeftSquareFill/> </div>
            </button>
            <div>{page+1} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div> <BsFillArrowRightSquareFill/> </div>
            </button>
        </div>
      </>);
  }