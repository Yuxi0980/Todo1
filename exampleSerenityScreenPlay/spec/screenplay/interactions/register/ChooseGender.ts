import { Click } from 'serenity-js/lib/screenplay-protractor';
import { RegisterPage } from '../../user_interface/RegisterPage';

export const ChooseGender = {

    clickOn: (gender: string) => {
        switch (gender) {
            case 'male':
                return Click.on(RegisterPage.genderMaleOption);
            case 'female':
                return Click.on(RegisterPage.genderFemaleOption);
            default:
                return Click.on(RegisterPage.genderMaleOption);
        }
    },

};