import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const { selectedBots, removeBot, clicked, isClicked } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {selectedBots.map(bot =>
            <BotCard 
              key={bot.id}
              bot={bot}
              removeBot={removeBot}
              clicked={clicked}
              isClicked={isClicked}
            />
          )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
