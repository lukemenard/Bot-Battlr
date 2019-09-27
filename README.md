# Bot Battlr

Welcome to __Bot Battlr__, the one and only spot in the known universe where you can custom build your own Bot Army!

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, if the bot is to their liking, enlist that bot into their army.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; your main responsibility will be to get information, render it into the right containers, and build out the page's functionality. Try your best to find the right places to insert code into the established code base, but if your finished product has some styling issues, don't worry too much about it.


## Instructions
Follow along with these steps, making sure to read all of the instructions before beginning to code.

### 1.  Fetching Bots

Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots. The response should contain an array of bot objects that are structured as follows:

  ```json
    {
      "id": 301,
      "name": "gs-98",
      "health": 71,
      "damage": 85,
      "armor": 34,
      "bot_class": "Assault",
      "catchphrase": "111111111111110011001111100101110010010110001100",
      "avatar_url": "https://robohash.org/voluptasetab.png?size=300x300&set=set1",
      "created_at": "2017-12-08T14:13:45.272Z",
      "updated_at": "2017-12-08T14:13:45.272Z"
    }
  ```

Based on the current structure of the app, think about where this array of bots needs to be stored.


### 2.  Indexing bots

After you have fetched the bots, work on rendering them into `BotCollection`, which should be a child of `BotsPage`. A component called `BotCard` has been provided to you to display the information about an individual bot in a list format.


### 3.  Enlisting and Discharging bots 

Once the list is complete, work on the functionality of enlisting bots into your army. Clicking a card should add a bot to the user's list of bots. Bots that have been chosen should be displayed within `YourBotArmy`, which should also be a child of `BotsPage`  (feel free to reuse `BotCard`). _A bot should be enlisted only once_. If you click on a bot in your army, that bot should be removed from your army.

_Note that nothing needs to be persisted. Refreshing the page should clear out the current army._


## Checkpoint!

If you have gotten this far, you have hit the checkpoint. Your app should look like the following:

![alt text][checkpoint]

[checkpoint]: ./public/checkpoint_demo.gif "Checkpoint demo"

Before proceeding to the next part of the challenge, __be sure to stage a commit at this point__. That way if your code breaks or you do not get to finish the next feature, we will be able to see that you were able to get up to this point.


### 4. Improve

Now that you have some of the functionality of your app, it's time to improve the interface. Rather than enlisting the bot into the army, clicking on the card should instead display a show view (`BotSpecs`) for that bot, which should replace `BotsCollection`. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.

This improved version should look like the following:

![alt text][full_demo]

[full_demo]: ./public/full_demo.gif "Full demo"

