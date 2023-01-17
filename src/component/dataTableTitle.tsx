import './dataTableTitle.css'
import ArrowDropDown from "../assets/Arrow_drop_down";

type dataTableProps = {
  dataTableTitleInfo: {
    namn: string
    tjanstegrad: string
    Tjanstetype: string
    Undantagsregler: string
    Delegeringar: string
  }
}

const dataTableTitle = (props: dataTableProps) => {
  return (
    <div className="organisation-konto-data-table-title-container">
        <div className="organisation-konto-data-table-title-frame">
          <div className="organisation-konto-frame-component">
            <p className="organisation-konto-component-namn">{props.dataTableTitleInfo.namn}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstegrad-container">
          <div className="organisation-konto-tjnstegrad-frame">
            <p className="organisation-konto-tjnstegrad">{props.dataTableTitleInfo.tjanstegrad}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstetyp-container">
          <div className="organisation-konto-tjnstetyp-frame">
            <p className="organisation-konto-tjnstetyp">{props.dataTableTitleInfo.Tjanstetype}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-undantagsregler-container">
          <div className="organisation-konto-undantagsregler-frame">
            <p className="organisation-konto-undantagsregler">{props.dataTableTitleInfo.Undantagsregler}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-delegeringar-container">
          <div className="organisation-konto-delegeringar-frame">
            <p className="organisation-konto-frame-delegeringar">{props.dataTableTitleInfo.Delegeringar}</p>
            <ArrowDropDown />
          </div>
        </div>
      </div>
  )
}

export default dataTableTitle
