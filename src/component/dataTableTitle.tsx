import './dataTableTitle.css'
import ArrowDropDown from "../assets/Arrow_drop_down";
import { useContext } from 'react';
import { DataContext } from './dataContext';

const dataTableTitle = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const titleContext = useContext(DataContext)
  return (
    <div className="organisation-konto-data-table-title-container">
        <div className="organisation-konto-data-table-title-frame">
          <div className="organisation-konto-frame-component">
            <p className="organisation-konto-component-namn">{titleContext.dataTableTitleInfo.namn}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstegrad-container">
          <div className="organisation-konto-tjnstegrad-frame">
            <p className="organisation-konto-tjnstegrad">{titleContext.dataTableTitleInfo.tjanstegrad}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstetyp-container">
          <div className="organisation-konto-tjnstetyp-frame">
            <p className="organisation-konto-tjnstetyp">{titleContext.dataTableTitleInfo.Tjanstetype}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-undantagsregler-container">
          <div className="organisation-konto-undantagsregler-frame">
            <p className="organisation-konto-undantagsregler">{titleContext.dataTableTitleInfo.Undantagsregler}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-delegeringar-container">
          <div className="organisation-konto-delegeringar-frame">
            <p className="organisation-konto-frame-delegeringar">{titleContext.dataTableTitleInfo.Delegeringar}</p>
            <ArrowDropDown />
          </div>
        </div>
      </div>
  )
}

export default dataTableTitle
