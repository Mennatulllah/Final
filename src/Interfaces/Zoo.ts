export interface Zoo {
    _id:string;
    title:string;
    description:string;
    link:string;
    openingTime:Date;
    closedTime:Date;
    offDay:string;
    seasonStartDate:Date;
    seasonEndDate:Date;
    location:{
        longitude:number,
        latitude:number
        
    };
    image:string;

}

