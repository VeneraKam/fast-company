import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Paginaton = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null;

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={"page_" + page}
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Paginaton.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Paginaton;
