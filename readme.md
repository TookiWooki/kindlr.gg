Kindlr.gg
//////////////////////////////
//////Planning & Ideas///////
////////////////////////////

A place for game developers to gain funding for thier project.
    - One-time funding for: game, game mechanic, game art, story development, etc
    - Ongoing funding based on tiers setup by the creator.
    - REQUIREMENTS for publishing game on Kindlr.gg 
        - Developers must have a registered steam developer account
        - The game has to have a steam page


A place for gamer to find, fund, and play new games while being apart of them game's development community.


Steam API "based"
    - Kindlr is very intertwined with Steam and the user's profile/data
        - how Kindlr gives game recommendations: based on Steam library

Homepage featured
    - right side displays Recommended For You if the user is not signed in
    - right side displays Your Activity on Kindlr if the user is signed in

Game-ification
    - stickers are used much like twitch bits
    - when a campaign creator creates pledge tiers, they attach an image that shows the purpose/reward of that
    tier and then the user pledges by purchasing that pledge tier sticker (1 sticker = $1). 
        - The user who pledged can then decorate thier profile page with those collected stickers.
        - Stickers and thier totals are displayed on the campaign.

Backend (idk what this entails exactly yet..)
    - Firebase
        - I've read its best to have all folders as main folders and try not to save information too many levels deep in the tree. That way I only pull the information I need instead of all the information above in the same tree. ex: instead of having projects folder inside of the creators folder, I will have them as seperate directories with information linking the two within each? I can't see me having to update the information within too often so this should be ok..# kindlr.gg


//////////////////////////////
//////////Steam API//////////
////////////////////////////
There may be a wall I hit with using the Steam API in general with certain API attributes depending on if the user profile is set to public or private. fx: To get the user's owned games - this will not display if the user profile is set to private. I will need this information if I want to do the Game News System. (Maybe just prompt the player that they have to switch thier profile to public if they want this feature.)

What I Want To Do (to figure out):
- Show User Acheivements Total - GetPlayerAchievements () - currently have to specificy a gameID I want the achievements for...not good when a player has 1,343 games in thier library
- Configure a "Game News System" Where the User has a news page that displays Steam news (for that specific game by the developer) for each game the user has pledged to on Kindlr.gg
    - When the developer creates an update for the game on steam, and the user checks thier news, Kindlr.gg will cross reference with the user's 


What I Can Do:
https://developer.valvesoftware.com/wiki/Steam_Web_API


What I Can Do & Confirmed Can Do:
- Show User Display Name - personaname (public display name)
- Show User Profile Avatar - avatarmedium (64px 64px image)
- Show User Owned Games Total - GetOwnedGames (game_count)
- Replace total achievements with Steam User status - personastate (offline, online, busy, etc.)
    - Will likely go with this to begin with.
