import React from "react";
import style from './Paginator.module.sass'


type PaginatorType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props: PaginatorType) => {

    const {
        pageSize,
        totalCount,
        currentPage,
        onPageChanged,
} = props


    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((el) => {
                return <span className={currentPage === el ? style.selectedPage : style.start}
                             onClick={() => {
                                 onPageChanged(el)
                             }}
                >{el}</span>
            })}
        </div>
    )
}