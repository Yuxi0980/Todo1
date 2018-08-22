import * as tf from '@tensorflow/tfjs';
import "@tensorflow/tfjs-node"
import * as fs from 'fs';

const result = JSON.parse(fs.readFileSync('./data/results.json', 'utf8'));

const model = tf.sequential();

export class Networks {

    public async trainTheNetwork() {

        const trainingData = await tf.tensor2d(result.map(item => [
            item.rankPlayer1, item.rankPlayer2
        ]));

        const outputData = await tf.tensor2d(result.map(item => [
            item.PlayerWinner = 0 ? 1 : 0,
            item.PlayerWinner = 1 ? 1 : 0,
        ]));

        const testingData = await tf.tensor2d(result.map(item => [
            item.PlayerWinner = 0 ? 1 : 0,
            item.PlayerWinner = 1 ? 1 : 0,
        ]));

        model.add(tf.layers.dense({
            inputShape: [3],
            activation: 'sigmoid',
            units: 2,
        }))

        model.compile({
            loss: 'meanSquaredError',
            optimizer: tf.train.adam(.06)
        })

        model.fit(trainingData, outputData, {
            epochs: 100
        });

        this.predict(1, 36, testingData);
    }

    public async predict(rankPlayer1: number, rankPlayer2: number, testingData: tf.Tensor<tf.Rank.R2>) {
            console.log(
                await model.predict(testingData)
            );
    }

}