import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

class App extends React.Component {
    onVkitSearchSubmit = (VkitSearch) => {
        console.log(VkitSearch);
        //pass this req to youtube
        youtube.get('/search', {
            params: {
                q: VkitSearch
            }
        });
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmitt = {this.onVkitSearchSubmit}/>
            </div>
        );
    }
}
export default App;