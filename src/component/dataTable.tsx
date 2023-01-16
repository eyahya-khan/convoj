import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import { dataTableBlueInfo } from './dataInfo'
import { dataTableGulInfo } from './dataInfo';
import { dataTableGreenInfo } from './dataInfo';
import TeamBlue from './teamBlue';
import TeamGul from './teamGul';
import TeamGreen from './teamGreen';

const dataTable = () => {
    return (
        <div className="organisation-konto-data-table">
            <div className="organisation-konto-grupp-tallhjden">
                <div className="organisation-konto-top">
                    <div className="organisation-konto-frame-362x">
                        <DragIndicator />
                        <p className="organisation-konto-tallhjden">Grupp Tallhöjden</p>
                        <ArrowDropDown />
                    </div>
                    <p className="organisation-konto-dlj">Dölj</p>
                </div>
                <TeamBlue dataTableInfo = {dataTableBlueInfo}/>
                <TeamGul dataTableGulInfo = {dataTableGulInfo}/>
                <TeamGreen dataTableGreenInfo = {dataTableGreenInfo}/>
            </div>
        </div>
    )
}

export default dataTable