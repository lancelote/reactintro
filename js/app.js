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

// List of Channels
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

// Display content
ReactDOM.render(
    <ChannelList channels={channels}/>,
    document.getElementById('app')
);
