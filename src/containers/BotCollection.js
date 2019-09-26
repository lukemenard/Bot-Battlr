import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
	const { bots, addBot, isClicked, clicked } = this.props
  	return (
  	  <div className="ui four column grid">
			<div className="row">
				{bots.map(bot =>
					<BotCard 
						key={bot.id}
						bot={bot}
						addBot={addBot}
						clicked={clicked}
						isClicked={isClicked}
					/>
				)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
