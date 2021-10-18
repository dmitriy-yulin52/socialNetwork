import React from "react";
import style from './Paginator.module.sass'
import {v1} from "uuid";


type PaginatorType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    pages: number[],
}

export const Paginator = (props: PaginatorType) => {

    let {
        currentPage,
        onPageChanged,
        pages,
    } = props

    return (
        <div>
            {pages.map((el) => {
                const selectedPages = currentPage === el ? style.selectedPage : style.start
                return <span
                    key={v1()}
                    className={selectedPages}
                             onClick={() => {
                                 onPageChanged(el)
                             }}
                >{el}</span>
            })}
        </div>
    )
}