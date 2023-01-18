import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import { dataTableInformation } from './dataInfo'
import { dataTableAlvgardenInfo } from './dataInfo';
import TeamDataTable from './TeamDataTable';
import GroupAlvgardenData from './groupAlvgardenData';

const dataTable = () => {
    const groupArray = ['Tallhöjden', 'Älvgården', 'Ekbacka']
    return (
        <>
            <div className="organisation-konto-data-table">
                {groupArray.map(groupItem => {
                    return (
                        <div className="organisation-konto-grupp-tallhjden">
                            <div className="organisation-konto-top">
                                <div className="organisation-konto-frame-grupp-tallhjden">
                                    <DragIndicator />
                                    <p className="organisation-konto-tallhjden">Grupp {groupItem}</p>
                                    <ArrowDropDown />
                                </div>
                                <p className="organisation-konto-dlj">Dölj</p>
                            </div>
                            {groupItem === 'Tallhöjden' ? <TeamDataTable dataTableInformation={dataTableInformation} /> : null}
                            {groupItem === 'Älvgården' ? <GroupAlvgardenData dataTableAlvgardenInfo={dataTableAlvgardenInfo} /> : null}
                            {groupItem === 'Ekbacka' ? null : null}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default dataTable