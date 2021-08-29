export class TreeData {
   read: boolean;
   iconId: string;
   id: number;
   name: string;
   parentId: number;
   write: boolean;

   constructor(read: boolean, iconId: string, id: number, name: string, parentId: number, write: boolean,) {
      this.read = read;
      this.iconId = iconId;
      this.id = id;
      this.name = name;
      this.parentId = parentId;
      this.write = write;
   }
}

