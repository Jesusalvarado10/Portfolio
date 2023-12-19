class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
      append(value) {
        const nuevoNodo = new Node(value);
        
    
        if (this.head === null) {
          this.head = nuevoNodo;
          this.tail = nuevoNodo;
          this.head.next=this.tail;
        } else {
          this.tail.next = nuevoNodo;
          this.tail = nuevoNodo;
          this.tail.next=this.head;
        }
      }
    
    
      print() {
        let node = this.head;

        for (var i = 1; i < 5; i++) {
          console.log(node.value);
          node = node.next;
        }
       }
       rotate(){
this.head=this.head.next;
       }
       
    
}
const url= ["https://github.com/Jesusalvarado10/Graph","https://github.com/Jesusalvarado10/HotelTSB-HASH","https://github.com/Jesusalvarado10/Cdshop","https://github.com/Jesusalvarado10/InventorySQL"];
const list= new CircularLinkedList();
for (var i = 1; i < url.length+1; i++) {
  list.append(i);
}


