export class TreeModel {
   id: number;
   name: string;
   checked: boolean;
   iconId: string;
   write: boolean;
   children: TreeModel[];
   constructor(id: number, name: string, checked: boolean, iconId: string, write: boolean, children: TreeModel[]) {
      this.id = id;
      this.name = name;
      this.checked = checked;
      this.write = write;
      this.iconId = iconId;
      this.children = children;

   }

}
