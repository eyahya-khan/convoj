import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import { dataTableInformation } from './dataInfo'
import TeamDataTable from './TeamDataTable';

const dataTable = () => {
    return (
        <div className="organisation-konto-data-table">
            <div className="organisation-konto-grupp-tallhjden">
                <div className="organisation-konto-top">
                    <div className="organisation-konto-frame-grupp-tallhjden">
                        <DragIndicator />
                        <p className="organisation-konto-tallhjden">Grupp Tallhöjden</p>
                        <ArrowDropDown />
                    </div>
                    <p className="organisation-konto-dlj">Dölj</p>
                </div>
                <TeamDataTable dataTableInformation={dataTableInformation} />
            </div>
        </div>
    )
}

export default dataTable