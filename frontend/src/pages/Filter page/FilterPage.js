import FooterBasic from "components/FooterBasic";
import FilterContainer from "pages/Filter Page/components/FilterContainer";


import "pages/Filter Page/styles/filter-page.css";

function FilterPage() {
    return (
        <>
            <div className="filter">
                <div className="filter__header">This is Filter Page header</div>

                <div className="filter__body">
                    <div className="filter__side-panel">
                        <FilterContainer />
                    </div>
                    <div className="filter__results">
                        <div className="filter__results-header">
                            <div className="filter__sorting">Sort by:</div>
                            <div className="filter__compare">Select and compare</div>
                            <button className="filter__compare-button"></button>
                        </div>
                        <div className="filter__grid">I am grid div</div>
                    </div>
                </div>

                <FooterBasic />
            </div>
        </>
    );
}

export default FilterPage;
