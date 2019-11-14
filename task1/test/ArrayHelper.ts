export class ArrayHelper {
    public isInArray(array: readonly any[], ...a: readonly any[]): boolean {
        let result: boolean = true;
        a.forEach( (param: any) => {
            if(array.indexOf(param) === -1)
                result = false;
        });
        return result;
    }
}