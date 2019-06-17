//import { Date } from '@angular/common';

export class Log{
    id : number;
	type : string;
    status : string;
	machineId : number;
	userUsername : string;
	time : Date;
	text : string;

}



export const LOGS: Log[]=  [
    { id: 11, type: 'obican', status : 'bezopasan', machineId: 1, userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineId: 1, userUsername: 'a', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineId: 2, userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineId: 2, userUsername: 'eae', time: new Date(), text: 'neki tekst' }

  ];