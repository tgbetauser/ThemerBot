const handlers = [
    `start`,
    `photos`,
    `documents`,
    `cbquery`,
];

module.exports = bot =>
    handlers.forEach(handler =>
        require(`./${handler}`)(bot)
    );
