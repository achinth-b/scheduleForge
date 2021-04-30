export default class Employee {

     /* *
    *  Required Fields
    * */


    private name: string;
    private phoneNumber: number;
    private personalAddress: string; 
    private personalCity: string; 
    private personalState: string;
    private personalCountry: string;
    private availabilities: Map<string, Array<Number>>;


     /* *
    *  Constructor
    * */ 

    constructor(name: string, 
        phoneNumber: number, 
        personalAddress: string, 
        personalCity: string, personalState: string, personalCountry: string, availabilities: Map<string, Array<Number>>) {

        this.name = name;
        this.phoneNumber = phoneNumber;
        this.personalAddress = personalAddress;
        this.personalCity = personalCity;
        this.personalState = personalState;
        this.personalCountry = personalCountry; 
        this.availabilities = availabilities;

    }




}