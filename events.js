let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerJoin', player => {
    player.model = mp.joaat('mp_m_freemode_01');
    player.health = 100;
    player.spawn(new mp.Vector3(930.029541015625, -157.7088165283203, 74.64573669433594));
});
mp.events.add('playerReady', player => {
    player.call(`disablePlayerRegeneration`, 0);
});
mp.events.add('playerDeath', (player) => {
    player.health = 100;
    player.removeAllWeapons();
    player.spawn(new mp.Vector3(930.029541015625, -157.7088165283203, 74.64573669433594));
});
mp.events.add("playerChat", (player, text) => {
    text = player.name + "sagt : " + text;
    player.outputChatBox(text)
});
