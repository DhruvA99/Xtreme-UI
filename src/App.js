import "./App.css";
import Home from "./components/Home/Home";
import Alerts from "./components/Alerts/Alerts";
import Buttons from "./components/Buttons/Buttons";
import Card from "./components/Card/Card";
import ToolTip from "./components/ToolTip/ToolTip";
import Spinner from "./components/Spinner/Spinner";
import NotificationIcons from "./components/NotificationIcons/NotificationIcons";
import NavBar from "./components/NavBar/NavBar";
import Documentation from "./components/Documentation/Documentation";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router";
import Avatar from "./components/Avatars/Avatars";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/documentation" exact component={Documentation} />
        <Route path="/button" exact component={Buttons} />
        <Route path="/alert" exact component={Alerts} />
        <Route path="/card" exact component={Card} />
        <Route path="/tooltip" exact component={ToolTip} />
        <Route path="/navbar" exact component={NavBar} />
        <Route path="/notificationicons" exact component={NotificationIcons} />
        <Route path="/spinner" exact component={Spinner} />
        <Route path="/avatars" exact component={Avatar} />
      </Switch>
    </div>
  );
}

export default App;
