async function sendCommand(command) {
    await fetch(`/api/sendcommand?command=${command}`)
    
}





