import { useState } from 'react';
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minasidor, setMinasidor]  = useState<boolean>(true)
  return (
    <div className="organisation-konto-top-nav">
      <div className="organisation-konto-left-first">
        <div className="organisation-konto-item-first" onClick={()=> setMinasidor(!minasidor)}>
          <p className="organisation-konto-mina-sidor" >{props.topNavInfo.minasidor}</p>
          {minasidor ? <Expandmore /> : null}
          
        </div>
        <div className="organisation-konto-item-second">
          <p className="organisation-konto-schemalggning">{props.topNavInfo.schemaLaggning}</p>
          <Expandmore />
        </div>
      </div>
      <div className="organisation-konto-right-first">
        <p className="organisation-konto-organisation">{props.topNavInfo.organisation}</p>
      </div>
    </div>
  )
}

export default topNav
