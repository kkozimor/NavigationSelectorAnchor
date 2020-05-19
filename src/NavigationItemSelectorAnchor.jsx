import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class NavigationItemSelectorAnchor extends Component {
    constructor(props) {
        super(props);
        this.state = { item: null };
    }

    dispatchEvent() {
        this.interval = setInterval(() => {
            if (this.props.itemName.status === "available") {
                var event = new CustomEvent("menuTrigger", { detail: this.props.itemName.value });
                document.dispatchEvent(event);
                clearInterval(this.interval);
            }
        }, 50);
    }
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", this.dispatchEvent, false);
    }

    render() {
        return <div style={{ display: "none" }} />;
    }
}

export default hot(NavigationItemSelectorAnchor);
