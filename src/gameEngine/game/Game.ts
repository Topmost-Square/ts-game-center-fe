import {Fighter} from "../fighters/Fighter";

export class Game {
    opponent1: Fighter;
    opponent2: Fighter;

    constructor(opponent1: Fighter, opponent2: Fighter) {
        this.opponent1 = opponent1;
        this.opponent2 = opponent2;

        opponent1.setEnemy(opponent2);
        opponent2.setEnemy(opponent1);
    }

    defineOrientation() {
        if (this.opponent1.position.x! < this.opponent2.position.x!) {
            this.opponent1.side = 'left';
            this.opponent2.side = 'right';
        } else {
            this.opponent1.side = 'right';
            this.opponent2.side = 'left';
        }
    }
}
