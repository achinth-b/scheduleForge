export default class Company {

    /* *
    *  Required Fields
    * */
    private name: string;
    private phoneNumber: number;
    private address: string;
    private city: string;
    private province_state_department: string;
    private countryCode: string;    



     /* *
    *  Constructor
    * */

    constructor(name: string, phoneNumber: number, address: string, city: string, province_state_department: string, countryCode: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.province_state_department = province_state_department;
        this.countryCode = countryCode;
    }




}