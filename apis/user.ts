interface IUserData {
  name: string;
  createdAt: Date;
  id: string;
}

interface IClimbingCenter {
  name: string;
  id: string;
}

interface IClimbingLevel {
  color: number;
  id: string;
}

interface IRanking {
  id: string;
  userName: string;
  rank: number;
}

interface IClimbingRanking {
  userRanking: IRanking[];
  myRanking: IRanking;
}

interface IRegisterRecord {
  climbingCenterKey: string;
  userId: string;
  sysdate: Date;
  record: IClimbingLevel[];
  id: string;
}
