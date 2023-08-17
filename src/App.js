import React from 'react';
import {WelcomeText} from './Components/WelcomeText';
import {FeedContainer} from './Components/FeedContainer';
import DateTimeComponent from "./Components/DateTimeComponent";
import {QuickLinksContainer} from "./Components/QuickLinksContainer";
import {TasksComponent} from "./Components/TasksComponent";

function App() {
    return (
        <div className="App">
            <div className="dashboard">
                <div className="column">
                    <WelcomeText/>
                    <FeedContainer/>
                </div>
                <div className="column">
                    <DateTimeComponent/>
                    <QuickLinksContainer/>
                    <TasksComponent/>
                </div>
            </div>
        </div>
    );
}

export default App;