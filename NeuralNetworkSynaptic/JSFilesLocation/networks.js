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
const fs = require("fs");
const result = JSON.parse(fs.readFileSync('./data/results.json', 'utf8'));
const model = tf.sequential();
let tfinterface;
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
            model.add(tf.layers.dense({
                inputShape: [1],
                activation: 'sigmoid',
                units: 1,
            }));
            model.compile({
                loss: 'meanSquaredError',
                optimizer: tf.train.adam(.06)
            });
            tfinterface = yield model.fit(trainingData, outputData, {
                epochs: 100
            });
        });
    }
    predict(rankPlayer1, rankPlayer2) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tfinterface.then(() => __awaiter(this, void 0, void 0, function* () {
                return yield model.predict(tf.tensor2d([rankPlayer1, rankPlayer2], [1, 1]));
            }));
        });
    }
}
exports.Networks = Networks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9uZXR3b3Jrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUV6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUUxRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUIsSUFBSSxXQUFXLENBQUM7QUFFaEIsTUFBYSxRQUFRO0lBRUgsZUFBZTs7WUFFekIsTUFBTSxZQUFZLEdBQTBCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDckMsQ0FBQyxDQUFDLENBQUM7WUFFSixNQUFNLFVBQVUsR0FBMEIsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUMsQ0FBQztZQUVKLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDZixVQUFVLEVBQUUsU0FBUztnQkFDckIsS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUMsQ0FBQTtZQUVILEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNoQyxDQUFDLENBQUE7WUFFRixXQUFXLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQ3BELE1BQU0sRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLFdBQW1CLEVBQUUsV0FBbUI7O1lBQ3pELE9BQU8sTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtnQkFDckMsT0FBTyxNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUVKO0FBbkNELDRCQW1DQyJ9