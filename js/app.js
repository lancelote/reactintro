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
    // Initialize state to prevent error at first load
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Save the state of the input field
    onChange(event) {
        this.setState(
            {channelName: event.target.value}
        );
    }

    // Adds new channel to the list
    onSubmit(event) {
        let {channelName} = this.state;
        console.log(channelName);

        // Adds new channel to the channel list array
        channels.push(
            {name: channelName}
        );

        // Clear input field after submit
        this.setState(
            {channelName: ''}
        );

        // Prevent browser to submit form via HTTP
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                       onChange={this.onChange.bind(this)}
                       value={this.state.channelName}/>
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
