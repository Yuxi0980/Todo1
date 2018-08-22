"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
const fs = require("fs");
const result = JSON.parse(fs.readFileSync('./data/results.json', 'utf8'));
const model = tf.sequential();
class Networks {
    trainTheNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const trainingData = yield tf.tensor2d(result.map(item => [
                item.rankPlayer1, item.rankPlayer2
            ]));
            const outputData = yield tf.tensor2d(result.map(item => [
                item.PlayerWinner = 0 ? 1 : 0,
                item.PlayerWinner = 1 ? 1 : 0,
            ]));
            const testingData = yield tf.tensor2d(result.map(item => [
                item.PlayerWinner = 0 ? 1 : 0,
                item.PlayerWinner = 1 ? 1 : 0,
            ]));
            model.add(tf.layers.dense({
                inputShape: [3],
                activation: 'sigmoid',
                units: 2,
            }));
            model.compile({
                loss: 'meanSquaredError',
                optimizer: tf.train.adam(.06)
            });
            model.fit(trainingData, outputData, {
                epochs: 100
            });
            this.predict(1, 36, testingData);
        });
    }
    predict(rankPlayer1, rankPlayer2, testingData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(yield model.predict(testingData));
        });
    }
}
exports.Networks = Networks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9uZXR3b3Jrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLGlDQUE4QjtBQUM5Qix5QkFBeUI7QUFFekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFMUUsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRTlCLE1BQWEsUUFBUTtJQUVKLGVBQWU7O1lBRXhCLE1BQU0sWUFBWSxHQUFHLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDckMsQ0FBQyxDQUFDLENBQUM7WUFFSixNQUFNLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBRUosTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUMsQ0FBQztZQUVKLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDZixVQUFVLEVBQUUsU0FBUztnQkFDckIsS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUMsQ0FBQTtZQUVILEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNoQyxDQUFDLENBQUE7WUFFRixLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQ2hDLE1BQU0sRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxXQUFtQixFQUFFLFdBQW1CLEVBQUUsV0FBa0M7O1lBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQ1AsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUNuQyxDQUFDO1FBQ1YsQ0FBQztLQUFBO0NBRUo7QUExQ0QsNEJBMENDIn0=