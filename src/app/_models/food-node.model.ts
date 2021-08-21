export interface FoodNode {
   checked: boolean;
   children: FoodNode[];
   iconId: string;
   id: number;
   name: string;
   write: boolean;
}