import React, {useState} from "react"
import styles from "./users.module.css";

const Paginator = (props) => {

    let portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []

    for(let i= 1; i <= pagesCount; i++ ){
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {
                portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>

            }
                {
                    pages.filter((item) => item >= leftPortionPageNumber && item <= rightPortionPageNumber ).
                    map(item => (
                        <span className={props.currentPage === item && styles.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(item)
                              }}
                        >{item}</span>
                    ))
                }
            {
                portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>PREV</button>

            }
        </div>
    )
}

export default Paginator
