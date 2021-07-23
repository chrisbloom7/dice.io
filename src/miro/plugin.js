// plugin.js

import './plugin.css'
import MiroPluginApp from './miro-plugin-app'

/* global DiceIO, miro */

function startApp(nickname, channel) {
  // Create dice roller client instance
  let pathname = window.location.pathname.replace(/miro\/sidebar\.html$/gi, '')
  let diceRoller = new DiceIO({
    channel: channel,
    nickname: nickname,
    serverUrl: window.location.origin,
    socketOptions: { path: pathname + 'socket.io' },
  })

  // Start Miro web plugin application
  let app = new MiroPluginApp(diceRoller) // eslint-disable-line no-unused-vars
}

miro.onReady(() => {
  // Attempt to get current user name (dice roller nickname)
  miro.board.getInfo().then((boardInfo) => {
    // Attempt to get team account id (dice roller channel)
    miro.account.get().then((account) => {
      startApp(boardInfo.currentUserContext.user.name, 'miro' + account.id)
    })
    .catch(e => {
      console.log('[Dice Roller] Failed to get team account id', e)
    })
  })
  .catch(e => {
    console.log('[Dice Roller] Failed to get board info', e)
  })
})
