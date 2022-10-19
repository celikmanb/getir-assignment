import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { breakpoints, colors } from "../themes";
import Dots from '../themes/Dots'

function Pagination({currentPage, pageCount, onPageChange }) {
  return (
    <PaginationWrapper>
      <RPagination
        containerClassName="pagination"
        pageClassName="page"
        breakClassName="break"
        nextClassName="next"
        previousClassName="prev"
        breakLabel={<StyledDots />}
        previousLabel={"<- Prev"}
        nextLabel={"Next ->"}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={e => onPageChange(e.selected + 1)}
        forcePage={currentPage-1}
      />
    </PaginationWrapper>
  );
}

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 608px;
`;

const StyledDots = styled(Dots)`
  color: #697488;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


const RPagination = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  align-items: center;
  max-width: 535px;
  align-self: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  user-select: none;

  .page {
    width: 32px;
    height: 40px;
    border-radius: 2px;
    cursor: pointer;
    color: ${colors.gray500};
    display: none;

    &.selected {
      color: white;
      background-color: ${colors.primary};
    }

    a {
      display: grid;
      place-items: center;
    }
  }

  .break {
    display: none;
  }

  .prev:hover,
  .next:hover,
  .page:hover {
    opacity: 0.8;
  }

  .prev,
  .next {
    cursor: pointer;
    color: ${colors.primary};

    &.disabled {
      cursor: not-allowed;
      color: ${colors.gray500};
    }
  }

  .prev {
    margin-right: auto;
  }

  .next {
    margin-left: auto;
  }

  @media ${breakpoints.sm} {
    .page {
      display: grid;
    }

    .break {
      display: list-item;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

