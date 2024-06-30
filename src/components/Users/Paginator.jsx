import React from "react"
import styles from "./users.module.css";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i= 1; i <= pagesCount; i++ ){
        pages.push(i)
    }

    return (
        <div>
                {
                    pages.map(item => (
                        <span className={props.currentPage === item && styles.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(item)
                              }}
                        >{item}</span>
                    ))
                }
            </div>
    )
}

export default Paginator
