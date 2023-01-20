import DragIndicator from "../assets/Drag_indicator";
import ArrowDropDown from "../assets/Arrow_drop_down";
import Label from '../assets/label';
import RightArrow from "../assets/right_arrow";
import { useContext } from "react";
import { DataContext } from "./dataContext";

const groupAlvgardenData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    const alvgardenContext = useContext(DataContext)
    const colorArray = ['Gladan', 'Särlan']
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
                        {alvgardenContext.dataTableAlvgardenInfo.map(item => {

                            return (
                                <div className="organisation-konto-row-container">
                                    <div className="organisation-konto-row-container-component">
                                        <DragIndicator />
                                        <p className="organisation-konto-data-table-namn">
                                            {color === 'Gladan' ? item.gladanNamn : null}
                                            {color === 'Särlan' ? item.sarlanNamn : null}
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

export default groupAlvgardenData
