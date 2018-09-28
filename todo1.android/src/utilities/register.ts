import { Global } from "./global";
import * as fs from 'fs';

const identificationType = JSON.parse(fs.readFileSync('./data/identification.types.json', 'utf8'));

const global: Global = new Global();

export class Util {

    private countryOption: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ListView/android.view.ViewGroup';
    private idTypeOption: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ListView/android.view.ViewGroup';
    private identificationNumberField: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText';

    private selectedCountry: string;

    public async selectCountry(country: string) {
        this.selectedCountry = country;
        country = country.toUpperCase();
        const selectCountry = identificationType.country.find(c => c.name === country);
        await browser.pause(global.pauseSeconds);
        await browser.click(this.countryOption + '[' + selectCountry.position + ']/android.widget.TextView');
    }

    public async selectIdType(idType: string) {
        idType = idType.toUpperCase();
        const selectCountry = identificationType.country.find(c => c.name === this.selectedCountry.toUpperCase());
        const selectIdType = selectCountry.idtype.find(c => c.name === idType);
        await browser.pause(global.pauseSeconds);
        await browser.click(this.idTypeOption + '[' + selectIdType.position + ']/android.widget.TextView');
    }

    public async enterIdNumber(idNumber: string) {
        if (idNumber.toUpperCase() == 'AUTOMATICO') {
            idNumber = await this.getCurrentDate();
        }
        await browser.setValue(this.identificationNumberField, idNumber);
    }

    private async getCurrentDate(): Promise<string> {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let currentDate =  dd + '' + mm + '' + yyyy + '' + hour + '' + minute;
        return currentDate;
    }

}