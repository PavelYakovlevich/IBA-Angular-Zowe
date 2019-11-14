export class Summator{
    public summator(...params: string[] | number[]): number | string{
        let sum: number | string; 
        let callbackFunc: any;
        if(typeof params[1] === "string"){
            sum = "";
            callbackFunc = (source: string, item: string):string  => source.concat(item);
        }else{
            sum = 0;
            callbackFunc = (source: number, item: number):number => source + item; 
        }   

        params.forEach((item: number | string) => {
            sum = callbackFunc(sum, item);
        });
        return sum;
    }
}