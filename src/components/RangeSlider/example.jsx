import * as React from "react";
import RangeSlider from "./index";

class ExampleRangeSlider extends React.PureComponent {
    static displayName = 'Progress Bar';
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ padding: "40px" }}>
                <RangeSlider
                    width={"100%"}
                    max={100}
                    step={1}
                    min={0}
                    progressValue={parseInt(this.state.value) || 0}
                    onChange={(event, value) => {
                        this.setState({ value });
                    }}
                />
            </div>
        )
    }
}
export default ExampleRangeSlider;