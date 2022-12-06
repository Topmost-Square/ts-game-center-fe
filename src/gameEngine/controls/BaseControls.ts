import {Fighter} from "../fighters/Fighter";

export class BaseControls {
    options = {
        up: false,
        down: false,
        left: false,
        right: false,
        handKick: {
            prevReleased: true,
            pushed: false
        },
        legKick: {
            prevReleased: true,
            pushed: false
        },
    };

    fighter: Fighter|null = null;

    setFighter(fighter: Fighter) {
        this.fighter = fighter;
    }

    setOption(option: string, value: boolean) {
        this.options = {
            ...this.options,
            [option]: value
        }
    }

    dropReleaseFlag(kickType: string) {
        if (this.options.hasOwnProperty(kickType)) {
            this.options = {
                ...this.options,
                [kickType]: {
                    ...[kickType],
                    prevReleased: false
                }
            };
        }
    }
}