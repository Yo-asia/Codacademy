export function getObstacleEvents() {
    const coinFlip = Boolean(Math.random() > 0.5);
    return {
        'ObstacleLeft': coinFlip,
        'ObstacleRight': !coinFlip,
        'Deer': coinFlip
    };
}

export function getSpeedLimit() {
    const speedLimitPresent = Boolean(Math.random() > 0.5);
    return {
        'SpeedUp': speedLimitPresent,
        'SlowDown': !speedLimitPresent
    };
}