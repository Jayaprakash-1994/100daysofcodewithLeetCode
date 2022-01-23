//Merge Two Sorted Lists

/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/


 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var mergeTwoLists = function(list1, list2) {
    let list = new ListNode() // New Linked List to store result Values.
    let head = list // Storing empty Node in Head at Intail.
    while (list1 !== null && list2 !== null) {
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (list1.val < list2.val) {
            list.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            list.next = new ListNode(list2.val)
            list2 = list2.next
        }
        
        list = list.next
    } 
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (list1 !== null)
        list.next = list1
    if (list2 !== null)
        list.next = list2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
}
 