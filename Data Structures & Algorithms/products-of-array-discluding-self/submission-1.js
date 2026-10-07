class Solution {
    productExceptSelf(nums) {

        let output = new Array(nums.length).fill(1);

        let prefix = 1;

        // Left → Right
        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;

        // Right → Left
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= postfix;
            postfix *= nums[i];
        }

        return output;
    }
}