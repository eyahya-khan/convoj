import './action.css'
import PersonAdd from "../assets/personAdd";
import Groups from "../assets/Groups";
import GroupAdd from "../assets/Group_add";
import ViewColumn from "../assets/View_column";
import ExitToApp from "../assets/Exit_to_app";
import IosShare from "../assets/Ios_share";
import Share from "../assets/Share";
import { useContext } from 'react';
import { DataContext } from './dataContext';

const action = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const actionContext = useContext(DataContext)
  return (
    <div className="organisation-konto-actions">
      <div className="organisation-konto-left">
        <div className="organisation-konto-add-person">
          <PersonAdd />
          <p className="organisation-konto-ny-person">{actionContext.actionInfo.person}</p>
        </div>
        <div className="organisation-konto-add-team">
          <Groups />
          <p className="organisation-konto-nytt-team">{actionContext.actionInfo.team}</p>
        </div>
        <div className="organisation-konto-add-group">
          <GroupAdd />
          <p className="organisation-konto-ny-grupp">{actionContext.actionInfo.group}</p>
        </div>
        <div className="organisation-konto-change-columns">
          <ViewColumn />
          <p className="organisation-konto-ndra-kolumner">{actionContext.actionInfo.changeColumn}</p>
        </div>
      </div>
      <div className="organisation-konto-right">
        <div className="organisation-konto-frame-impotera">
          <div className="organisation-konto-frame-impotera-exit">
            <ExitToApp />
            <p className="organisation-konto-importera">{actionContext.actionInfo.importera}</p>
          </div>
          <div className="organisation-konto-frame-share">
            <IosShare />
            <p className="organisation-konto-exportera">{actionContext.actionInfo.exportera}</p>
          </div>
          <div className="organisation-konto-frame-dela">
            <Share />
            <p className="organisation-konto-dela">{actionContext.actionInfo.dela}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default action
