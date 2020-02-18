import React from 'react';

const ArrowBlock = ({arrowText, pageNumber, pages, changePage}) => {	
    return(
		<td className={"pagination-block" + ((pageNumber > pages || pageNumber <= 0) ? ' arrow-block-hide' : '')} onClick={() => changePage(pageNumber)}>
			<span>{arrowText}</span>
		</td>
	)
}

export default ArrowBlock;