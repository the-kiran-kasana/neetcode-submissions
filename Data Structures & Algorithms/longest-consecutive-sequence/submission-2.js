class Solution {
   longestConsecutive(nums) {

    if(nums.length == []) return 0;

    nums.sort((a, b) => a - b);


    let set = new Set(nums);
    let arr = [...set];

    let count = 1;
    let maxCount = 1;


    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i + 1] === arr[i] + 1) {
            count++;
        } else {
            count = 1;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
  }
}
