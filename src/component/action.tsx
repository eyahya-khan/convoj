import './action.css'
import PersonAdd from "../assets/personAdd";
import Groups from "../assets/Groups";
import GroupAdd from "../assets/Group_add";
import ViewColumn from "../assets/View_column";
import ExitToApp from "../assets/Exit_to_app";
import IosShare from "../assets/Ios_share";
import Share from "../assets/Share";

type actionProps = {
  actionInfo: {
    person: string
    team: string
    group: string
    changeColumn: string
    importera: string
    exportera: string
    dela: string
  }
}

const action = (props: actionProps) => {
  return (
    <div className="organisation-konto-actions">
        <div className="organisation-konto-left">
          <div className="organisation-konto-add-person">
            <PersonAdd />
            <p className="organisation-konto-ny-person">{props.actionInfo.person}</p>
          </div>
          <div className="organisation-konto-add-team">
            <Groups />
            <p className="organisation-konto-nytt-team">{props.actionInfo.team}</p>
          </div>
          <div className="organisation-konto-add-group">
            <GroupAdd />
            <p className="organisation-konto-ny-grupp">{props.actionInfo.group}</p>
          </div>
          <div className="organisation-konto-change-columns">
            <ViewColumn />
            <p className="organisation-konto-ndra-kolumner">{props.actionInfo.changeColumn}</p>
          </div>
        </div>
        <div className="organisation-konto-right">
          <div className="organisation-konto-frame-347x">
            <div className="organisation-konto-frame-241x">
              <ExitToApp />
              <p className="organisation-konto-importera">{props.actionInfo.importera}</p>
            </div>
            <div className="organisation-konto-frame-324x">
              <IosShare />
              <p className="organisation-konto-exportera">{props.actionInfo.exportera}</p>
            </div>
            <div className="organisation-konto-frame-323x">
              <Share />
              <p className="organisation-konto-dela">{props.actionInfo.dela}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default action