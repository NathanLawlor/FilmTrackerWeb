import React from 'react';
import NumberBlock from "./NumberBlock";
import ArrowBlock from "./ArrowBlock";
import "../../css/Pagination.css";

function PageBlocks({currentPage, pages, changePage}) {
	var pageBlocks = [];
	pageBlocks.push(<ArrowBlock arrowText={'<'} pageNumber={currentPage - 1} pages={pages} changePage={changePage} key={0}/>);
	for (var p = 1; p < (pages + 1); p++) {
		pageBlocks.push(
			<NumberBlock pageNumber={p} currentPage={currentPage} changePage={changePage} key={p}/>
		);
	}
	pageBlocks.push(<ArrowBlock arrowText={'>'} pageNumber={currentPage + 1} pages={pages} changePage={changePage} key={pages + 1}/>);
	return pageBlocks;
}

const PaginationBar = (props) => {
	return (
		<div className="pagination-container">
			<table className="pagination-table">
				<tbody>
					<tr>
						<PageBlocks 
							currentPage={props.currentPage}
							pages={props.pages}
							changePage={props.changePage}
						/>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default PaginationBar;