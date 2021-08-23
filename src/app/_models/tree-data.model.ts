export class TreeData {
   checked: boolean;
   iconId: string;
   id: number;
   name: string;
   parentId: number;
   write: boolean;

   constructor(checked: boolean, iconId: string, id: number, name: string, parentId: number, write: boolean,) {
      this.checked = checked;
      this.iconId = iconId;
      this.id = id;
      this.name = name;
      this.parentId = parentId;
      this.write = write;
   }
}

