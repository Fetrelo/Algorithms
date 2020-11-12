/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 *
 * @author Felipe Pulido
 * @since 2020/11/07
 * Problem URL: https://leetcode.com/problems/add-two-numbers/
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode init = new ListNode();
        ListNode pointer = init;
        ListNode last;
        int carry = 0;
        while(l1 != null || l2 != null) {
            int a = l1 != null ? l1.val : 0;
            int b = l2 != null ? l2.val : 0;
            int sum = a + b + carry;
            carry = sum / 10;
            
            pointer.next = new ListNode(sum%10);
            pointer = pointer.next;
            
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }
        if(carry != 0) {
            pointer.next = new ListNode(carry);
        }
        return init.next;
    }
}