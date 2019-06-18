export class Alarm{
    id: number;
	text : string;
    alarmType : string;
    userUsername : string;
    machineId : number;
    time : Date;
}



export const ALARMS: Alarm[]=  [
    { id: 11, alarmType: 'obican', machineId: 1, userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, alarmType: 'obican', machineId: 1, userUsername: 'a', time: new Date(), text: 'neki tekst' },
    { id: 11, alarmType: 'obican', machineId: 2, userUsername: 'ee', time: new Date(), text: 'neki tekst' },
    { id: 11, alarmType: 'obican', machineId: 2, userUsername: 'eae', time: new Date(), text: 'neki tekst' }

  ];