import { Util } from "../utilities/register";
import { Global } from "../utilities/global";

const util: Util = new Util();
const global: Global = new Global();

export class RegisterPage {

    private countryField: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]';
    private identificationTypeField: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[2]';
    private passwordField: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.EditText';
    private continueButton: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]';

    public async sendFormRegister(country: string, idType: string, idNumber: string, password: string) {
        await browser.waitForVisible(this.countryField, global.waitSeconds);
        await browser.click(this.countryField);
        await util.selectCountry(country);
        await browser.waitForVisible(this.countryField, global.waitSeconds);
        await browser.click(this.identificationTypeField);
        await util.selectIdType(idType);
        await browser.waitForVisible(this.countryField, global.waitSeconds);
        await util.enterIdNumber(idNumber);
        await browser.waitForVisible(this.countryField, global.waitSeconds);
        await browser.setValue(this.passwordField, password);
        await browser.click(this.continueButton);
    }

}