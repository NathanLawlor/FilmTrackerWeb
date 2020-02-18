import React from 'react';

const NumberBlock = ({pageNumber, currentPage, changePage}) => {	
    return(
		<td className={"pagination-block" + (pageNumber === currentPage ? ' page-active' : '')} 
				onClick={ (pageNumber !== currentPage ? () => changePage(pageNumber) : null)}>
			<span>{pageNumber}</span>
		</td>
	)
}

export default NumberBlock;