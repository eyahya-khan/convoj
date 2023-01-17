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
    <div className="organisation-konto-data-table-title">
        <div className="organisation-konto-namn">
          <div className="organisation-konto-frame-85x">
            <p className="organisation-konto-namn-1">{props.dataTableTitleInfo.namn}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstegrad">
          <div className="organisation-konto-frame-87x">
            <p className="organisation-konto-tjnstegrad-1">{props.dataTableTitleInfo.tjanstegrad}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-tjnstetyp">
          <div className="organisation-konto-frame-87x-1">
            <p className="organisation-konto-tjnstetyp-1">{props.dataTableTitleInfo.Tjanstetype}</p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-undantagsregler">
          <div className="organisation-konto-frame-87x-2">
            <p className="organisation-konto-undantagsregler-1">
              Undantagsregler
            </p>
            <ArrowDropDown />
          </div>
        </div>
        <div className="organisation-konto-delegeringar">
          <div className="organisation-konto-frame-88x">
            <p className="organisation-konto-delegeringar-1">{props.dataTableTitleInfo.Delegeringar}</p>
            <ArrowDropDown />
          </div>
        </div>
      </div>
  )
}

export default dataTableTitle
