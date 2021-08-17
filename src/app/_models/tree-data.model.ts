export class TreeData {
   id: number;
   name: string;
   checked: boolean;
   write: boolean;
   iconId: string;
   parentId: number;
   constructor(id: number, name: string, checked: boolean, write: boolean, iconId: string, parentId: number) {
      this.id = id;
      this.name = name;
      this.checked = checked;
      this.write = write;
      this.iconId = iconId;
      this.parentId = parentId;
   }
}

