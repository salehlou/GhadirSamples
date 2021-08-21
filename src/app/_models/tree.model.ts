export class TreeModel {
   public id: number;
   public name: string;
   public checked: boolean;
   public iconId: string;
   public write: boolean;
   public children: TreeModel[];

   constructor(id: number, name: string, checked: boolean, iconId: string, write: boolean, children: TreeModel[]) {
      this.checked = checked;
      this.children = children;
      this.iconId = iconId;
      this.id = id;
      this.name = name;
      this.write = write;
   }
}
