

export interface PersonModel {
   id: number;
   barcode: string;
   name: string;
   isActive: boolean;
   adminLevel: number;
   startDate: Date;
   expireDate: Date;
   departementId: number;
   departementName: string;
   cardsCount: number;
   fingersCount: number;
   facesCount: number;
   irisesCount: number;
   accessGroupId: number;
   accessGroupName: string;
}
