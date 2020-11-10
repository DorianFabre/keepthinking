import React from 'react';
import Text from '../Text/Text.json';

const { 
    text: [{
        search
    }]} = Text;

const header = props => {
    const searchState = props.searchState;
    const menuState = props.menuState;

    let headerSearchContent = <span className="lnr lnr-magnifier dummyLink2" onClick={props.showSearchField}></span>;
    let headerMenuContent = null;
    
    if (searchState) {
        headerSearchContent = <fragment>
            <input type="text" placeholder={search} />
            <p className="lnr lnr-cross dummyLink2" id="closeSearch" onClick={props.closeSearch}></p>
            <button className="dummyLink2" onClick={props.closeSearch}>Search</button>
        </fragment>
    }
    
    if (menuState) {
        headerMenuContent = <ul>
            <li className="dummyLink" onClick={props.showMenuDropDown}>Option 1</li>
            <li className="dummyLink" onClick={props.showMenuDropDown}>Option 2</li>
            <li className="dummyLink" onClick={props.showMenuDropDown}>Option 3</li>
            <li className="dummyLink" onClick={props.showMenuDropDown}>Option 4</li>
        </ul>
    }

    return (
        <header>
            <div id="headerSearch">
                {headerSearchContent}
            </div>
            <nav id="headerNav">
                <span className="lnr lnr-menu dummyLink2" id="headerHamburger" onClick={props.showMenuDropDown}></span>
                {headerMenuContent}
            </nav>
        </header>
    );
}

export default header;