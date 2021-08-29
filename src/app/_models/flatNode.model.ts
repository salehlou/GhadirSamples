export class FlatNode {
   id: number;
   name: string;
   level: number;
   read: boolean;
   write: boolean;
   iconId: string;
   expandable: boolean;
   constructor(id: number, name: string, level: number, read: boolean, iconId: string, write: boolean, expandable: boolean) {
      this.id = id;
      this.name = name;
      this.level = level
      this.read = read;
      this.write = write;
      this.iconId = iconId;
      this.expandable = expandable;

   }
}
