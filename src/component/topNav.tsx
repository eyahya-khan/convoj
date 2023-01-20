import { useState, useContext } from 'react';
import './topNav.css'
import Expandmore from "../assets/expand_more";
import { DataContext } from './dataContext';

const topNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const topNavContext = useContext(DataContext)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minasidor, setMinasidor]  = useState<boolean>(true)
  return (
    <div className="organisation-konto-top-nav">
      <div className="organisation-konto-left-first">
        <div className="organisation-konto-item-first" onClick={()=> setMinasidor(!minasidor)}>
          <p className="organisation-konto-mina-sidor" >{topNavContext.topNavInfo.minasidor}</p>
          {minasidor ? <Expandmore /> : null}
          
        </div>
        <div className="organisation-konto-item-second">
          <p className="organisation-konto-schemalggning">{topNavContext.topNavInfo.schemaLaggning}</p>
          <Expandmore />
        </div>
      </div>
      <div className="organisation-konto-right-first">
        <p className="organisation-konto-organisation">{topNavContext.topNavInfo.organisation}</p>
      </div>
    </div>
  )
}

export default topNav
