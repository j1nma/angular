import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenProjectNames = ['Test'];

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (CustomValidators.forbiddenProjectNames.indexOf(control.value) !== -1) {
                    resolve({ 'forbiddenProjectName': true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    }
}