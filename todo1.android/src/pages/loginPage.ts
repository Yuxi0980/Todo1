import { Global } from "../utilities/global";

const global: Global = new Global();

export class LoginPage {
    
    private registerButton: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button[2]';
    private acceptButtonAlertContactPermission: string = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[2]';
    private acceptButtonAlertFilePermission: string = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[2]';
    private alertTitle: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]';
    private alertMassege: string = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[3]'; 

    public async touchRegisterButton() {
        await browser.waitForVisible(this.registerButton, global.waitSeconds);
        await browser.click(this.registerButton);
    }

    public async launchConfiguration() {
        await browser.waitForVisible(this.acceptButtonAlertContactPermission, global.waitSeconds);
        await browser.click(this.acceptButtonAlertContactPermission);
        await browser.waitForVisible(this.acceptButtonAlertFilePermission, global.waitSeconds);
        await browser.click(this.acceptButtonAlertFilePermission);
    }

    public async getAlertMessage() {
        await browser.waitForVisible(this.alertTitle, global.waitSeconds);
        let alertTitle = await browser.getText(this.alertTitle);
        let alertMessage = await browser.getText(this.alertMassege);
        return {
            title: alertTitle,
            message: alertMessage
        } 
    }

}