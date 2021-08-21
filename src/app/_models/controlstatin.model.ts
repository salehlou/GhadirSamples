export interface Controlstatin {
    id: number;
    name: string;
    ip: string;
    connectionType: number;  //deviceToServer=1, serverTodevice=2, parent || none=0 ,deActive=-1
    isParent: boolean;
    ping:boolean;
    brand:string;
    childern: Controlstatin[];
}

