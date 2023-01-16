import './dataTable.css'
import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import DragIndicator1 from "../assets/Drag_indicator1";
import ArrowDropDown1 from "../assets/Arrow_drop_down1";

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
                <div className="organisation-konto-frame-365x">
                    <div className="organisation-konto-top-3">
                        <div className="organisation-konto-frame-362x-3">
                            <DragIndicator1 />
                            <p className="organisation-konto-team-bl">Team Blå</p>
                            <ArrowDropDown1 />
                        </div>
                        <p className="organisation-konto-dlj-3">Dölj</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dataTable