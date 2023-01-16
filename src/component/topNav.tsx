import './topNav.css'
import Expandmore from "../assets/expand_more";

type topNavProps = {
  topNavInfo: {
    minasidor: string
    schemaLaggning: string
    organisation: string
  }
}

const topNav = (props: topNavProps) => {
  return (
    <div className="organisation-konto-top-nav">
      <div className="organisation-konto-left-1">
        <div className="organisation-konto-item-1x">
          <p className="organisation-konto-mina-sidor">{props.topNavInfo.minasidor}</p>
          <Expandmore />
        </div>
        <div className="organisation-konto-item-2x">
          <p className="organisation-konto-schemalggning">{props.topNavInfo.schemaLaggning}</p>
          <Expandmore />
        </div>
      </div>
      <div className="organisation-konto-right-1">
        <p className="organisation-konto-organisation">{props.topNavInfo.organisation}</p>
      </div>
    </div>
  )
}

export default topNav
