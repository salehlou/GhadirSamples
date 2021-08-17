export class FlatNode {
   id: number;
   name: string;
   level: number;
   checked: boolean;
   write: boolean;
   iconId: string;
   expandable: boolean;
   constructor(id: number, name: string, level: number, checked: boolean, iconId: string, write: boolean, expandable: boolean) {
      this.id = id;
      this.name = name;
      this.level = level
      this.checked = checked;
      this.write = write;
      this.iconId = iconId;
      this.expandable = expandable;

   }
}
