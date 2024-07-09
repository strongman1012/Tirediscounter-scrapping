import React from "react";
import DifferentRear from "./differentRear";
import Rear from "./Rear";

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            searchTerm: '2055516',
            searchResults: [],
            loading: false,
            UserName: '10340',
            Password: 'autotires',
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.ShowDiffer = this.ShowDiffer.bind(this);
        this.HideDiffer = this.HideDiffer.bind(this);
        this.ConditionRender = this.ConditionRender.bind(this);
    }

    async handleSearch() {
        this.setState({ loading: true });
        const { searchTerm, UserName, Password } = this.state;
        try {
            const response = await fetch('http://localhost:8000/search-products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserName, Password, searchTerm }),
            });
            const data = await response.json();
            console.log(data.results, 'ddddddddd');
            if (data.success) {
                this.setState({ searchResults: data.results });
            } else {
                console.error('Search failed', data.error);
                // Handle search failure (e.g., show error message)
            }
        } catch (error) {
            console.error('Error during search', error);
            // Handle network or server error
        } finally {
            this.setState({ loading: false });
        }
    }

    ShowDiffer() {
        this.setState({ show: true });
    }

    HideDiffer() {
        this.setState({ show: false });
    }

    ConditionRender() {
        const { show } = this.state;
        if (show) {
            return (
                <div>
                    <div className="tcwlw_search_size_staggered_info tcwlw_clearfix">
                        <div className="tcwlw_sixcol tcwlw_fields_wrapper_1">
                            <label>Front tires</label></div>
                        <div className="tcwlw_sixcol tcwlw_last tcwlw_fields_wrapper_2">
                            <label>Rear tires</label><span className="tcwlw_space"></span>
                            <a href="#" onClick={this.HideDiffer} className="tcwlw_search_size_staggered_switch tcwlw_text_nobreak">Hide rear size</a></div>
                    </div>
                    <DifferentRear />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="tcwlw_search_size_staggered_info">
                        <div>
                            <a href="#" onClick={this.ShowDiffer} className="tcwlw_search_size_staggered_switch tcwlw_text_nobreak">Add different rear size</a>
                        </div>
                    </div>
                    <Rear />
                </div>
            );
        }
    }

    render() {
        const { searchTerm, searchResults, loading } = this.state;

        return (
            <div className="container-fluid custom-main-market-box">
                <div className="d-none "></div>
                <div className="main-market-box mx-0 ">
                    <div style={{ maxWidth: "1920px", margin: " 0px auto" }}>
                        <div>
                            <div className="market-shop-item text-center">
                                <div id="tireconnect" data-tcwlw-w="xt t s m l">
                                    <div id="tcwlw_widget" className="tcwlw_web tcwlw_standard" data-tcwlw-lang="en_CA">
                                        <div className="tcwlw_wrapper">
                                            <div className="tcwlw_powered_by_wrapper">
                                                <div className="tcwlw_powered_by">Powered by<a
                                                    href="https://www.tireconnect.ca/?utm_source=powered_by_tc_JS%20Auto%20Tires&amp;utm_medium=tc_tires"
                                                    target="_blank"><img
                                                        src="https://app.tireconnect.ca/widgets/search/dist/img/tireconnect-logo.png"
                                                        alt="TireConnect" /></a></div>
                                            </div>
                                            <div className="tcwlw_widget">
                                                <div className="tcwlw_search_wrapper" id="tcwlw_search_wrapper">
                                                    <div className="tcwlw_search_inner">
                                                        <div id="tcwlw_search_by" className="tcwlw_form tcwlw_search_by" role="search">
                                                            <div className="tcwlw_border_color tcwlw_search_by_select_wrapper tcwlw_bg_color"><label
                                                                htmlFor="tcwlw_search_by_select" className="tcwlw_font_color">How would you like to
                                                                search?</label><select id="tcwlw_search_by_select">
                                                                    <option value="size">By Tire Size</option>
                                                                    <option value="vehicle">By Vehicle</option>
                                                                </select></div>
                                                            <div id="tcwlw_by_tire_size_tab"
                                                                className="tcwlw_box tcwlw_search_fields tcwlw_by_tire_size_tab">
                                                                <fieldset className="tcwlw_fields_wrapper">
                                                                    <div className="tcwlw_columns">
                                                                        <div id="widget">
                                                                            {this.ConditionRender()}
                                                                        </div>
                                                                        <figure id="image"><img
                                                                            src="https://app.tireconnect.ca/widgets/search/dist/img/tire-size-image-detail_en.png"
                                                                            alt="Tire size information is found on the side of your tires and inside the door jamb of the driver's side door."
                                                                            data-xblocker="passed" style={{ visibility: "visible" }} /></figure>
                                                                    </div>
                                                                    <div className="tcwlw_search_btns_wrapper">
                                                                        <div><button type="button" onClick={this.handleSearch} disabled={loading} className="tcwlw_btn tcwlw_brand_btn tcwlw_submit"><i
                                                                            className="tcwlw_material_icons"></i> Find your tires now</button></div>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {loading && <p>Loading...</p>}
                                {searchResults.length > 0 && (
                                    <ul className="list-group">
                                        {searchResults.map((result, index) => (
                                            <li key={index} className="list-group-item">
                                                <p>SKU : {result.sku}</p>
                                                <p> {result.description}</p>
                                                <p> {result.price}</p>
                                                <p> {result.productName}</p>
                                                <p> {result.brand}</p>
                                                <p> {result.season}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Widget;
