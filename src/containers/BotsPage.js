import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SearchBar from '../components/SearchBar'

const botsURL = "https://bot-battler-api.herokuapp.com/api/v1/bots"


class BotsPage extends React.Component {

  state = {
    bots: [],
    selectedBots: [],
    filteredBots: [],
    showBot: {},
    clicked: false
  }
  
	componentDidMount() {
			this.fetchBots()
	}

	fetchBots = () => {
		fetch(botsURL)
			.then(response => response.json())
			.then(results => this.setState({
        bots: results,
        filteredBots: results
		}))
	}

	addBot = (bot) => {
    return(this.state.selectedBots.includes(bot)
      ? null
      : this.setState({
        selectedBots: [...this.state.selectedBots, bot]
      })
    )
	}

  removeBot = (bot) => {
    this.setState({
      selectedBots: this.state.selectedBots.filter(robot => robot !== bot)
    })
  }

  isClicked = (bot) => {
    this.setState({
      clicked: !this.state.clicked,
      showBot: bot
    })
  }

  addCard = () => {
    return (
      <div>
        <SearchBar filterBots={this.filterBots}/>
        <YourBotArmy
          selectedBots={this.state.selectedBots}
          removeBot={this.removeBot}
        />
        <BotCollection
          bots={this.state.filteredBots}
          clicked={this.state.clicked}
          isClicked={this.isClicked}
          addBot={this.addBot}
        />
      </div>
    )
  }

  showPage = (bot) => {
    return(
      <div>
        <SearchBar filterBots={this.filterBots}/>
        <YourBotArmy
          selectedBots={this.state.selectedBots}
          removeBot={this.removeBot}
        />
        <BotSpecs
          bot={bot}
          addBot={this.addBot}
          clicked={this.state.clicked}
          isClicked={this.isClicked}
        />      
      </div>
    )
  }

  filterBots = (botClass) => {
    if(botClass !== "All"){
      this.setState({
        filteredBots: this.state.bots.filter(bot => bot.bot_class === botClass)
      })
    }else{
      this.setState({
        filteredBots: this.state.bots
      })
    }
  }

  render() {
    const clickStatus = this.state.clicked
    return(
      clickStatus
      ? this.showPage(this.state.showBot)
      : this.addCard()
    )
  }
}

export default BotsPage;