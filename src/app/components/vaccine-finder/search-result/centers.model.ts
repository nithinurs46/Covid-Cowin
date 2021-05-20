import { Sessions } from "./sessions.model";
import { VaccineFees } from "./vaccine-fees.model";

export class Centers {
    public center_id!:number;
    public name!:string;
    public address!:string;
    public state_name!:string;
    public district_name!:string;
    public block_name!:string;
    public pincode!:number;
    public lat!:number;
    public long!:number;
    public from!:string;
    public to!:string;
    public fee_type!:string;
    public sessions!:Sessions[]
    public vaccine_fees!:VaccineFees[];

    public Centers(){
        
    }

}
