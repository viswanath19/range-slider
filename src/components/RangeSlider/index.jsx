import * as React from "react";
import * as PropTypes from "prop-types";
//import './_style.scss';
export default class RangeSlider extends React.Component {
    static propTypes = {
        width: PropTypes.string,
        progressValue: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        inputProps: PropTypes.object,
        onMouseLeave: PropTypes.func,
        onMouseOver: PropTypes.func,
        showTooltip : PropTypes.bool,
    };

    static defaultProps = {
        width: '40%',
        step: 1,
        max: 5,
        min: 0,
        onChange: () => { },
        disabled: false,
        inputProps: {},
        showTooltip:true,
        onMouseLeave: () => { },
        onMouseOver: () => { },
    };


    constructor(props) {
        super(props);
        this.state = {
            progressValue: 1,
            unit: "",
            magnitude: ""
        }
        this.inputRangeRef = React.createRef();
        this.tooltipRef = React.createRef();
    }

    componentDidMount = () => {
        this.widthExt();
    }

    widthExt() {
        let width = this.props.width ? this.props.width.split(/(\d+)/) : "100%".split(/(\d+)/);
        let magnitude = width[1];
        let unit = width[2] ? width[2] : "px";
        this.setState({
            unit,
            magnitude
        })
    };

    onChangeListener = (event) => {
        var el = this.inputRangeRef.current;
        // this.tooltipRef.current.classList.remove('info-visible');
        const value = el.value;
        this.props.onChange(event, value);
        localStorage.setItem("current-value",value);
    }

    render() {
        const { progressValue } = this.props;
        const widthVal = this.props.min === parseInt(progressValue) ? 0 : parseFloat((progressValue * (this.state.magnitude / this.props.max) - (this.props.max < 7 ? this.props.min * 10 : 0)))
        let tooltipPos = progressValue.toString().length > 2 ? 22 : progressValue.toString().length < 2 ? 1 : this.tooltipRef.current != null && (this.tooltipRef.current.clientWidth/2);
        return (
            <div>
                <div onMouseLeave={(e) => { this.props.onMouseLeave(e); this.tooltipRef.current.classList.remove('info-visible') }}
                    onMouseOver={(e) => { this.props.onMouseOver(e); this.tooltipRef.current.classList.add('info-visible') }}
                    className="progress-filler">
                    <input
                        {...this.props.inputProps}
                        disabled={this.props.disabled}
                        style={{ width: `${this.state.magnitude}${this.state.unit}` }}
                        className="progress-label"
                        ref={this.inputRangeRef}
                        onChange={this.onChangeListener}
                        type="range"
                        min={String(this.props.min)}
                        max={String(this.props.max)}
                        step={String(this.props.step)}
                        value={progressValue}
                    />
                    <div className="filler-instance" style={{ width: this.state.unit && this.state.unit === '%' ? `${widthVal}${this.state.unit}` : `${parseFloat(progressValue * this.state.magnitude / 100)}${this.state.unit}`, cursor: this.props.disabled ? 'not-allowed' : 'default' }} > </div>
                    { this.props.showTooltip && <span className="tooltiptext" ref={this.tooltipRef} style={{ left:`calc(${widthVal}${this.state.unit} - ${tooltipPos}px)`  }} >
                        {progressValue}
                    </span>}
                </div>
            </div>
        )
    }
}
