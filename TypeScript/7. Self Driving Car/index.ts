import { getObstacleEvents } from './computer-vision';
import { getSpeedLimit } from './computer-vision';
//Types & interfaces

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
    speedingControl: Speeding;
}

interface Events {
    [events: string]: boolean;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
    stop: () => void;
}

interface Speeding extends Control {
    accelerate: (speed: string) => void;
}

//Classes
class Car implements AutonomousCar {
    isRunning?: boolean;
    steeringControl: Steering;
    speedingControl: Speeding;

    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
        this.speedingControl = props.speedingControl;
    }

    respond(events: Events) {
        if (!this.isRunning) {
            console.log('The car is off');
            return;
        }
        Object.keys(events).forEach(eventKey => {
            if (!events[eventKey]) {
                return
            }
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right')
            }
            if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left')
            }
            if (eventKey === 'Deer') {
                this.steeringControl.stop()
            }
            if (eventKey === 'SpeedUp') {
                this.speedingControl.accelerate('faster')
            }
            if (eventKey === 'SlowDown') {
                this.speedingControl.accelerate('slower')
            }
        });
    }
}

class SteeringControl implements Steering {
    execute(command: string) {
        console.log(`Executing: ${command}`)
    };

    turn(direction: string) {
        this.execute(`turn ${direction}`);
    };

    stop() {
        console.log('STOP! Oh deer... Emergency Breaking')
    }
}

class SpeedingControl implements Speeding {
    execute(command: string) {
        console.log(`Go ${command}`)
    };
    accelerate(speed: string) {
        this.execute(speed);
    }
}

//main
const steering = new SteeringControl();
const speeding = new SpeedingControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering, speedingControl: speeding });
for (let i = 0; i < 10; i++) {
    autonomousCar.respond(getObstacleEvents());
    autonomousCar.respond(getSpeedLimit());
}
