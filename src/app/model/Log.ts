//import { Date } from '@angular/common';

export class Log{
    id : number;
	type : string;
    status : string;
	machineIp : number;
	userUsername : string;
	time : Date;
    text : string;
    informationSystem: string;

}



export const LOGS: Log[]=  [
    { id: 11, type: 'obican', status : 'bezopasan', machineIp: 1, informationSystem: 'neki', userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineIp: 1, informationSystem: 'neki', userUsername: 'a', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineIp: 2, informationSystem: 'neki', userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, type: 'obican', status : 'bezopasan', machineIp: 2, informationSystem: 'neki', userUsername: 'eae', time: new Date(), text: 'neki tekst' }

  ];