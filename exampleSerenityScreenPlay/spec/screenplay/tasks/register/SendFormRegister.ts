import { Task, Click, Enter, See, Select } from 'serenity-js/lib/screenplay-protractor';
import { RegisterPage } from '../../user_interface/RegisterPage';
import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));

export const SendFormRegister = ({

    withAllInformation: () => Task.where(`#actor navigate to register page`,
        Enter.theValue(userInfo.username).into(RegisterPage.usernameField),
        Enter.theValue(userInfo.password).into(RegisterPage.passwordField),
        Enter.theValue(userInfo.password2).into(RegisterPage.password2Field),
        Enter.theValue(userInfo.gender).into(userInfo.gender == 'male' ?
            RegisterPage.genderMaleOption : RegisterPage.genderFemaleOption),
        Enter.theValue(userInfo.address).into(RegisterPage.addressField),
        Enter.theValue(userInfo.billingAddress).into(RegisterPage.billingAddressField),
        Select.theValue(userInfo.state).from(RegisterPage.stateList),
        Click.on(RegisterPage.termsAndConditionsOption),
        Click.on(RegisterPage.registerButton),
    ),

});