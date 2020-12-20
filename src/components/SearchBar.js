import React from 'react'

class SearchBar extends React.Component {
    //initialize state object and pass this state to input as a value
    state = {VkitSearch: ''};

    //eventHandler fn
    //alternative to inline fn as :
    // onChange{e => this.setState({VkitSearch: e.target.value})}
    onInputChange = (event) => {
        this.setState({VkitSearch: event.target.value })
    };

    onFormSubmit = event => {
        //to stop from sending req to backend(default action)
        event.preventDefault();

        //callback from parent Component
        // (parent component is told where the current search is)
        this.props.onFormSubmitt(this.state.VkitSearch);
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search VideoKit</label>
                        <input
                            type="text"
                            value={this.state.VkitSearch}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;