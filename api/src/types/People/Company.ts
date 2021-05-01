import WeeklySchedule from "../Schedules/WeeklySchedule";
import Employee from "./Employee";
import Employer from "./Employer";

export default class Company {
  
    
    private employer: Employer; 
    private employees: Array<Employee>;
    private schedule: WeeklySchedule;
     
    constructor(employer: Employer, employees: Array<Employee>, schedule: WeeklySchedule) {
        this.employees = employees; 
        this.employer = employer;
        this.schedule = schedule;
    }



    public addEmployees(newbies: Employee | Array<Employee>): any {

        if (Array.isArray(newbies)) {
            for (let e of newbies) {
                this.employees.push(e);
            }
            return "Added these employees successfully!";
        } else {
            this.employees.push(newbies);
            return "Added this employee successfully!";
        }

        
    }

    public removeEmployees(veterans: Employee | Array<Employee>): any {
        if (Array.isArray(veterans)) {
            for (let e of veterans) {
                let removed = this.employees.find(element => (element == e));
                if (typeof removed == "undefined") {
                    return "Whoops, something's not right with the removal list. Please check youe employee list!"
                }

                this.employees = this.employees.filter(element => element != e);
            }

            return "Successfully removed these employees!";
        } else {
            let removed = this.employees.find(element => (element == veterans));
            if (typeof removed == "undefined") {
                return "Whoops, something's not right with the removal. Please check your employee!"
            }
            this.employees = this.employees.filter(element => element != veterans);
            return "Successfully removed this employee!"
        }
    }



}