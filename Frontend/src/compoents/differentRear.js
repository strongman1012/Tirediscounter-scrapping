import React from "react";

class DifferentRear extends React.Component {

    render() {
        return (
            <fieldset className="tcwlw_staggered_sizes"><div className="tcwlw_row">
                <div className="tcwlw_sixcol tcwlw_fields_wrapper_1">
                    <div className="tcwlw_field"><label htmlFor="tcwlw_width[f]">Width&nbsp;<span className="req">*</span></label>
                        <div className="tcwlw_select_field tcwlw_custom_select">
                            <select name="width[f]" className="" id="tcwlw_width[f]">
                                <option value="125">125</option></select><div className="tcwlw_select_field_overlay"></div>
                        </div></div></div><div className="tcwlw_sixcol tcwlw_last tcwlw_fields_wrapper_2">
                    <div className="tcwlw_field"><label htmlFor="tcwlw_width[r]">Width&nbsp;<span className="req">*</span></label>
                        <div className="tcwlw_select_field tcwlw_custom_select">
                            <select name="width[r]" className="" id="tcwlw_width[r]"><option value="">- Select -</option></select>
                            <div className="tcwlw_select_field_overlay"></div></div></div></div></div>
                <div className="tcwlw_row"><div className="tcwlw_sixcol tcwlw_fields_wrapper_1">
                    <div className="tcwlw_field"><label htmlFor="tcwlw_height[f]">Profile&nbsp;<span className="req">*</span></label>
                        <div className="tcwlw_select_field tcwlw_custom_select">
                            <select name="height[f]" className="" id="tcwlw_height[f]">
                                <option value="70">70</option></select>
                            <div className="tcwlw_select_field_overlay"></div>
                        </div>
                    </div>
                </div>
                    <div className="tcwlw_sixcol tcwlw_last tcwlw_fields_wrapper_2">
                        <div className="tcwlw_field">
                            <label htmlFor="tcwlw_height[r]">Profile&nbsp;<span className="req">*</span></label>
                            <div className="tcwlw_select_field tcwlw_custom_select">
                                <select disabled="" name="height[r]" className="" id="tcwlw_height[r]"><option value="">- Select -</option></select>
                                <div className="tcwlw_select_field_overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tcwlw_row"><div className="tcwlw_sixcol tcwlw_fields_wrapper_1">
                    <div className="tcwlw_field">
                        <label htmlFor="tcwlw_rim[f]">Wheel Size&nbsp;<span className="req">*</span></label>
                        <div className="tcwlw_select_field tcwlw_custom_select">
                            <select name="rim[f]" className="" id="tcwlw_rim[f]">
                                <option value="16">16"</option></select>
                            <div className="tcwlw_select_field_overlay">
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="tcwlw_sixcol tcwlw_last tcwlw_fields_wrapper_2">
                        <div className="tcwlw_field">
                            <label htmlFor="tcwlw_rim[r]">Wheel Size&nbsp;<span className="req">*</span></label>
                            <div className="tcwlw_select_field tcwlw_custom_select">
                                <select disabled="" name="rim[r]" className="" id="tcwlw_rim[r]">
                                    <option value="">- Select -</option>
                                </select>
                                <div className="tcwlw_select_field_overlay">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tcwlw_field">
                    <label htmlFor="tcwlw_seasonId">Tire Season&nbsp;<span className="req">*</span></label>
                    <div className="tcwlw_select_field tcwlw_custom_select">
                        <select name="seasonId" className="" id="tcwlw_seasonId">
                            <option value="2">All Season</option></select>
                        <div className="tcwlw_select_field_overlay">
                        </div>
                    </div>
                </div>
            </fieldset>

        )
    }
}

export default DifferentRear;