import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import DragIndicator1 from "../assets/Drag_indicator1";
import ArrowDropDown1 from "../assets/Arrow_drop_down1";

type dataTableInfoProps = {
    dataTableInfo: {
        namn: string
        tjanstegrad: string
        Tjanstetype: string
        Undantagsregler: string
        Delegeringar: string
    }[]
}

const dataTable = (props: dataTableInfoProps) => {
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
                <div className="organisation-konto-frame-365x">
                    <div className="organisation-konto-top-3">
                        <div className="organisation-konto-frame-362x-3">
                            <DragIndicator1 />
                            <p className="organisation-konto-team-bl">Team Blå</p>
                            <ArrowDropDown1 />
                        </div>
                        <p className="organisation-konto-dlj-3">Dölj</p>
                    </div>

                    {props.dataTableInfo.map(item => {
                        return (
                            <div className="organisation-konto-row-1x-1">
                                <div className="organisation-konto-component-1">
                                    <DragIndicator />
                                    <p className="organisation-konto-emery-dorwart">
                                        {item.namn}
                                    </p>
                                </div>
                                <div className="organisation-konto-frame-145x-1">
                                    <p className="organisation-konto-component-10">{item.tjanstegrad}</p>
                                </div>
                                <div className="organisation-konto-frame-155x-1">
                                    <p className="organisation-konto-dag-kvll-1">{item.Tjanstetype}</p>
                                </div>
                                <div className="organisation-konto-frame-77x-3">
                                    {/* <Label2 /> */}
                                    <p className="organisation-konto-st-2">{item.Undantagsregler}</p>
                                </div>
                                <div className="organisation-konto-frame-76x-1" />
                                <div className="organisation-konto-frame-128x-1">
                                    <div className="organisation-konto-frame-42x">
                                        <p className="organisation-konto-insulin">{item.Delegeringar}</p>
                                    </div>
                                    {/* <Icon type="FALSE_SMALL_TYPE" /> */}
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default dataTable