import React, {useMemo} from "react";
import style from './Paginator.module.sass'


type PaginatorType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props: PaginatorType) => {

    let {
        pageSize,
        totalCount,
        currentPage,
        onPageChanged,
    } = props


    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages: Array<number> = []

    pages = useMemo(()=>{
        let pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    },[pages])



    return (
        <div>
            {pages.map((el) => {

                const selectedPages = currentPage === el ? style.selectedPage : style.start
                return <span className={selectedPages}
                             onClick={() => {
                                 onPageChanged(el)
                             }}
                >{el}</span>
            })}
        </div>
    )
}