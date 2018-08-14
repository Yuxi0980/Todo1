import { Task, Click, Enter, See, Select, Activity, Interaction } from 'serenity-js/lib/screenplay-protractor';
import { RegisterPage } from '../../user_interface/RegisterPage';
import { ChooseGender } from '../../Interactions/register/ChooseGender';
import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));

export const SendFormRegister = ({

    withAllInformation: async () => Task.where(`#actor navigate to register page`, 
        await Enter.theValue(userInfo.username).into(RegisterPage.usernameField),
        await Enter.theValue(userInfo.password).into(RegisterPage.passwordField),
        await Enter.theValue(userInfo.password2).into(RegisterPage.password2Field),
        await ChooseGender.clickOn(userInfo.gender),
        await Enter.theValue(userInfo.address).into(RegisterPage.addressField),
        await Enter.theValue(userInfo.billingAddress).into(RegisterPage.billingAddressField),
        await Select.theValue(userInfo.state).from(RegisterPage.stateList),
        await Click.on(RegisterPage.termsAndConditionsOption),
        await Click.on(RegisterPage.registerButton),
    ),

});