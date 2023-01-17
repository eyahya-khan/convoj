import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import Label from '../assets/label';
import RightArrow from "../assets/right_arrow";
import './TeamDataTable.css'

type dataTableInfoProps = {
    dataTableInformation: {
        BlåNamn: string
        GulNamn: string
        GrönNamn: string
        RedNamn: string
        tjanstegrad: string
        Tjanstetype: string
        Undantagsregler: string
        Delegeringar: string
    }[]
}

const TeamDataTable = (props: dataTableInfoProps) => {
    const colorArray = ['Blå', 'Gul', 'Grön', 'Red']
    return (
        <>
            {colorArray.map(color => {
                return (
                    <div className="organisation-konto-frame-365x">
                        <div className={`organisation-konto-team-${color}`}>
                            <div className="organisation-konto-frame-362x-3">
                                <DragIndicator />
                                <p className="organisation-konto-team-bl">Team {color}</p>
                                <ArrowDropDown />
                            </div>
                            <p className="organisation-konto-dlj-3">Dölj</p>
                        </div>
                        {props.dataTableInformation.map(item => {

                            return (
                                <div className="organisation-konto-row-1x-1">
                                    <div className="organisation-konto-component-1">
                                        <DragIndicator />
                                        <p className="organisation-konto-data-table-namn">
                                            {/* {if (color === 'Blå') ? item.BlåNamn : item.GulNamn} */}
                                            {item.BlåNamn}
                                        </p>
                                    </div>
                                    <div className="organisation-konto-frame-145x-1">
                                        <p className="organisation-konto-component-10">{item.tjanstegrad}</p>
                                    </div>
                                    <div className="organisation-konto-frame-155x-1">
                                        <p className="organisation-konto-dag-kvll-1">{item.Tjanstetype}</p>
                                    </div>
                                    <div className="organisation-konto-frame-77x-3">
                                        {item.Undantagsregler ? <Label /> : ""}
                                        <p className="organisation-konto-st-2">{item.Undantagsregler}</p>
                                    </div>
                                    <div className="organisation-konto-frame-76x-1" />
                                    <div className="organisation-konto-frame-128x-1">
                                        {item.Delegeringar !== "" ?
                                            <div className="organisation-konto-frame-42x">
                                                <p className="organisation-konto-delegeringar">{item.Delegeringar}</p>
                                            </div>
                                            : null}
                                    </div>
                                    <RightArrow />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default TeamDataTable