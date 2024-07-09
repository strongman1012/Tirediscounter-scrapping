import React from "react";
import CustomDropdown from "./custom";
// import SelectCom from "./selectCom";
class Rear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isFocused: false
        };
    }

    toggleMoreFields = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };
    handleOverlayClick = () => {
        alert('dd')
        this.setState({ isFocused: true });
    };

    render() {
        return (
            <fieldset>
                <div className="tcwlw_field"><label htmlFor="tcwlw_width">Width&nbsp;<span
                    className="req">*</span></label>
                    <CustomDropdown id="tcwlw_width" name="width"/>
                </div>
                <div className="tcwlw_field"><label htmlFor="tcwlw_height">Profile&nbsp;<span
                    className="req">*</span></label>
                    <CustomDropdown id="tcwlw_height" name="height"/>
                </div>
                <div className="tcwlw_field"><label htmlFor="tcwlw_rim">Wheel Size&nbsp;<span
                    className="req">*</span></label>
                    <CustomDropdown id="tcwlw_rim" name="rim"/>
                </div>
                <div className="tcwlw_field"><label htmlFor="tcwlw_seasonId">Season&nbsp;<span
                    className="req">*</span></label>
                    <CustomDropdown id="tcwlw_seasonId" name="seasonId"/>
                </div>
                <div className={` ${this.state.isOpen ? 'visible' : 'hidden'}`}>
                    <div className="tcwlw_field"><label htmlFor="tcwlw_speedRating">Speed
                        Rating&nbsp;</label>
                    <CustomDropdown id="tcwlw_speedRating" name="speedRating"/>
                </div>
                    <div className="tcwlw_field"><label htmlFor="tcwlw_loadIndex">Load Index&nbsp;</label>
                    <CustomDropdown id="tcwlw_loadIndex" name="loadIndex"/>
                    </div>
                </div>
                <a href="#" onClick={this.toggleMoreFields} className="tcwlw_search_tire_size_more">More Options<i className="tcwlw_material_icons"></i></a>
            </fieldset>
        )
    }
}

export default Rear;