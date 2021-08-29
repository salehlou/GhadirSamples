export interface FoodNode {
   read: boolean;
   children: FoodNode[];
   iconId: string;
   id: number;
   name: string;
   write: boolean;
   level: number;
}