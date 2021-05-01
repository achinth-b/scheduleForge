import Employee from "../People/Employee";

export default class WeeklySchedule {
    
    
    // slot lengths are 1 hour
    private thisSunday: Map<number, Array<Employee>>;
    private thisMonday: Map<number, Array<Employee>>; 
    private thisTuesday: Map<number, Array<Employee>>;
    private thisWednesday: Map<number, Array<Employee>>;
    private thisThursday: Map<number, Array<Employee>>;
    private thisFriday: Map<number, Array<Employee>>;
    private thisSaturday: Map<number, Array<Employee>>;

    constructor()
}