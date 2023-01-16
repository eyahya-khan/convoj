import './dataTableTitle.css'
import ArrowDropDown9 from "../assets/Arrow_drop_down9";
import ArrowDropDown10 from "../assets/Arrow_drop_down10";
import ArrowDropDown11 from "../assets/Arrow_drop_down11";
import ArrowDropDown12 from "../assets/Arrow_drop_down12";
import ArrowDropDown13 from "../assets/Arrow_drop_down13";

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
    <div className="organisation-konto-data-table-titles">
        <div className="organisation-konto-namn">
          <div className="organisation-konto-frame-85x">
            <p className="organisation-konto-namn-1">{props.dataTableTitleInfo.namn}</p>
            <ArrowDropDown9 />
          </div>
        </div>
        <div className="organisation-konto-tjnstegrad">
          <div className="organisation-konto-frame-87x">
            <p className="organisation-konto-tjnstegrad-1">{props.dataTableTitleInfo.tjanstegrad}</p>
            <ArrowDropDown10 />
          </div>
        </div>
        <div className="organisation-konto-tjnstetyp">
          <div className="organisation-konto-frame-87x-1">
            <p className="organisation-konto-tjnstetyp-1">{props.dataTableTitleInfo.Tjanstetype}</p>
            <ArrowDropDown11 />
          </div>
        </div>
        <div className="organisation-konto-undantagsregler">
          <div className="organisation-konto-frame-87x-2">
            <p className="organisation-konto-undantagsregler-1">
              Undantagsregler
            </p>
            <ArrowDropDown12 />
          </div>
        </div>
        <div className="organisation-konto-delegeringar">
          <div className="organisation-konto-frame-88x">
            <p className="organisation-konto-delegeringar-1">{props.dataTableTitleInfo.Delegeringar}</p>
            <ArrowDropDown13 />
          </div>
        </div>
      </div>
  )
}

export default dataTableTitle
