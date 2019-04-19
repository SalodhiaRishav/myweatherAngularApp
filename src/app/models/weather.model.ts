export class Weather{
    // iconId:string;
    // temperature:number;
    // description: string;
    // pressure:number;
    // humidity:number;
    // wind:{speed:number}

    constructor(
        public date:Date,
        public icon:string,
        public temperature:number,
        public description: string,
        public pressure:number,
        public humidity:number,
        public windspeed:number
        ){}
}