// Array of available channels
let channels = [
    {name: "Hardware Support"},
    {name: "Software Support"}
];

// Single channel
class Channel extends React.Component {
    onClick() {
        console.log("I was clicked", this.props.name);
    }

    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

// List of channels
class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.channels.map(channel => {
                        return (
                            <Channel name={channel.name} />
                        )
                    })
                }
            </ul>
        )
    }
}

// From to create new channels
class ChannelForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text"/>
            </form>
        )
    }
}

// Component to store Channel list and Form to create new channels
class ChannelSection extends React.Component {
    render() {
        return (
            <div>
                <ChannelList channels={channels}/>
                <ChannelForm/>
            </div>
        )
    }
}

// Display content
ReactDOM.render(
    <ChannelSection/>,
    document.getElementById('app')
);
