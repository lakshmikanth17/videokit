import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
    state = {videos: [], selectedVideo: null };

    componentDidMount() {
        this.onVkitSearchSubmit(`$https://www.youtube.com/home`);
    }

    onVkitSearchSubmit = async VkitSearch => {
        console.log(VkitSearch);
        //pass this req to youtube
        const response = await youtube.get('/search', {
            params: {q: VkitSearch}
        });
        console.log(response.data.items);
        //set these result videos as state on App component
        this.setState({
            videos: response.data.items,
        selectedVideo: response.data.items[0]});
    };


    onVideoSelect = (video) => {
        console.log('from the App', video);
        this.setState({selectedVideo: video});
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmitt = {this.onVkitSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video = {this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList onVideoSelectt={this.onVideoSelect} videos = {this.state.videos}/></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;