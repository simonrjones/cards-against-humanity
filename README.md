# Cards Against Humanity online

Content is copyright [Cards Against Humanity](https://cardsagainsthumanity.com/) and is used under a Creative Commons BY-NC-SA 2.0 license.

## Status

Experimenting at present, come back later :)

## API design

All successful API requests return a 200 HTTP status with a `message` and an optional `data` JSON data property.

All failed API requests return a non-200 status with a `message` JSON data property.

Endpoints required:

### POST game/create

Create a room. 

Params:
* `code` - Code to join room

Note: a hash of the room code is stored on the server (it is not stored in plaintext).

Returns:
* `message` - Status message
* `data.room` - Room ID

### POST game/join

A new user joins a room.

Params:
* `room` - Room ID
* `code` - Code to join room
* `name` - User's name who wants to join

Returns:
* `message` - Status message
* `data.user` - User ID

### POST game/start

Game starts, no new users can join though if a user is disconnected they can rejoin via a link shared by other players.

Params:
* `room` - Room ID
* `code` - Code to join room
* `user` - User ID who requested game to start

### GET game/status

Get current state of play. 

This can be one of the following:
* Start of round (`round_start`)
* Round in play (`round_play`)
* Card tsar chooses the funniest play (`round_tsar`)
* End of round (`round_end`)

Params:
* `room` - Room ID
* `code` - Code to join room
* `user` - User ID

Returns:
* `message` - Status message
* `data.round` - Round number
* `data.status` - Current status ID
* `data.statusMessage` - Message to display to all users
* `data.tsar` - User ID of current card tsar
* `data.question` - Question card
* `data.users` - Array of users
    * `data.users[].id`
    * `data.users[].name`
    * `data.users[].score`
* `data.currentUser` - Current user (me)
    * `data.currentUser.id` - User ID
    * `data.currentUser.cards` - array of 10 cards available to play
	    * `data.currentUser.cards[].id`
        * `data.currentUser.cards[].text`

### POST game/choose-card-to-play

Choose a card to play.

Params:
* `room` - Room ID
* `code` - Code to join room
* `user` - User ID
* `card` - Card ID

Returns:
* `message` - Status message

### POST game/choose-card-to-win

Card tsar chooses a card to win.

Params:
* `room` - Room ID
* `code` - Code to join room
* `user` - User ID
* `card` - Card ID

Returns:
* `message` - Status message
* `data.user` - User ID who chose the winning card

### POST game/end

Game ends.

Params:
* `room` - Room ID
* `code` - Code to join room
* `user` - User ID who requested game to end

