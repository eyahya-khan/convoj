/* eslint-disable react-hooks/rules-of-hooks */
import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import { dataTableInformation } from './dataInfo'
import { dataTableAlvgardenInfo } from './dataInfo';
import TeamDataTable from './TeamDataTable';
import GroupAlvgardenData from './groupAlvgardenData';
import { useState } from 'react';

const dataTable = () => {
    const [toggleTall, setToggleTall] = useState(false)
    const [toggleAlv, setToggleAlv] = useState(false)
    const groupArray = ['Tallhöjden', 'Älvgården', 'Ekbacka']

    const handleClick = (grpItem : any) =>{
        if (grpItem.groupItem === "Tallhöjden"){
           setToggleTall(!toggleTall)
        }
        if (grpItem.groupItem === "Älvgården"){
            setToggleAlv(!toggleAlv)
         }
    }

    return (
        <>
            <div className="organisation-konto-data-table">
                {groupArray.map(groupItem => {
                    return (
                        <div className="organisation-konto-grupp-tallhjden">
                            <div className="organisation-konto-top" onClick={()=>handleClick({groupItem})}>
                                <div className="organisation-konto-frame-grupp-tallhjden">
                                    <DragIndicator />
                                    <p className="organisation-konto-tallhjden">Grupp {groupItem}</p>
                                    <ArrowDropDown />
                                </div>
                                <p className="organisation-konto-dlj">Dölj</p>
                            </div>
                            {groupItem === 'Tallhöjden' && toggleTall? <TeamDataTable dataTableInformation={dataTableInformation} /> : null}
                            {groupItem === 'Älvgården' && toggleAlv? <GroupAlvgardenData dataTableAlvgardenInfo={dataTableAlvgardenInfo} /> : null}
                            {groupItem === 'Ekbacka' ? null : null}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default dataTable