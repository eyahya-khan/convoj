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
                    <div className="organisation-konto-frame-dataTable-container">
                        <div className={`organisation-konto-team-${color}`}>
                            <div className="organisation-konto-frame-dataTable-container-team">
                                <DragIndicator />
                                <p className="organisation-konto-team-color">Team {color}</p>
                                <ArrowDropDown />
                            </div>
                            <p className="organisation-konto-dlj-team">Dölj</p>
                        </div>
                        {props.dataTableInformation.map(item => {

                            return (
                                <div className="organisation-konto-row-container">
                                    <div className="organisation-konto-row-container-component">
                                        <DragIndicator />
                                        <p className="organisation-konto-data-table-namn">
                                            {color === 'Blå' ? item.BlåNamn : null}
                                            {color === 'Gul' ? item.GulNamn : null}
                                            {color === 'Grön' ? item.GrönNamn : null}
                                            {color === 'Red' ? item.RedNamn : null}
                                        </p>
                                    </div>
                                    <div className="organisation-konto-frame-compoContainer-grad">
                                        <p className="organisation-konto-component-grad">{item.tjanstegrad}</p>
                                    </div>
                                    <div className="organisation-konto-frame-compoContainer-type">
                                        <p className="organisation-konto-component-type">{item.Tjanstetype}</p>
                                    </div>
                                    <div className="organisation-konto-frame-compoContainer-reglar">
                                        {item.Undantagsregler ? <Label /> : ""}
                                        <p className="organisation-konto-component-reglar">{item.Undantagsregler}</p>
                                    </div>
                                    <div className="organisation-konto-frame-compoContainer-ringar">
                                        {item.Delegeringar !== "" ?
                                            <div className="organisation-konto-component-ringar">
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