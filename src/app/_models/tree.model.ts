export class TreeModel {

   public children: TreeModel[] = []
   
   constructor(
      public id: number,
      public name: string,
      public checked: boolean,
      public iconId: string,
      public write: boolean
   ) { }
}
