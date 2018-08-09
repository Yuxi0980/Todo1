import { serenity } from 'serenity-js';
import { Actors } from '../../spec/actors';

export = function() {
    this.World = function() {
        this.stage = serenity.callToStageFor(new Actors());
    };
};