mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('10hp', (player) => {
    player.health = 10;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

// Kleidung



// Teleport
    // Lost Base Pos 1
    mp.events.addCommand('lt1', (player) => {
        player.position = new mp.Vector3(976.9453735351562, -117.882080078125, 74.22306060791016);
        player.model = mp.joaat("ig_clay"); //BlackOps01SMY
    });
    // Lost Base Pos 2
    mp.events.addCommand('lt2', (player) => {
        player.position = new mp.Vector3(963.709716796875, -196.77320861816406, 73.14510345458984);
        player.model = mp.joaat("s_m_y_blackops_01");
    });

// Fahrzeuge
mp.events.addCommand('t20', (player) => {
    let veh = mp.vehicles.new(mp.joaat('T20'), player.position);
    player.putIntoVehicle(veh, -1);
});

// WAFFEN
mp.events.addCommand('rwaffen', (player) => {
    player.removeAllWeapons();
    player.outputChatBox(`Dir wurden alle Waffen abgenommen.`);
});

mp.events.add('playerCommand', (player, command) => {
    let arr = command.split(' ');
    if (arr[0] == 'ak') {
        player.giveWeapon([0xBFEFFF6D, 0xCD274149], 1000);
    } else if (arr[0] == 'pdw') {
        player.giveWeapon([0xA3D4D34, 0xCD274149], 1000);
    } else if (arr[0] == 'p50') {
        player.giveWeapon([0x99AEEB3B], 1000);
    }
});

// ADMIN
mp.events.addCommand('healadmin', (player) => {
    player.health = 100;
    player.armour = 100;
});
mp.events.addCommand('makeadmin', (player) => {
    player.model = mp.joaat("cs_terry");
});

