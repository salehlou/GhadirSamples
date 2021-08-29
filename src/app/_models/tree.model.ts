export class TreeModel {
   public id: number;
   public name: string;
   public read: boolean;
   public iconId: string;
   public write: boolean;
   public children: TreeModel[];

   constructor(id: number, name: string, read: boolean, iconId: string, write: boolean, children: TreeModel[]) {
      this.read = read;
      this.children = children;
      this.iconId = iconId;
      this.id = id;
      this.name = name;
      this.write = write;
   }
}
