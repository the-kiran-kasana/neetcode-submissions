class Solution {

    topKFrequent(nums, k) {

        const obj = {};
        let arr = []

        for(let n of nums){
            if(obj[n] === undefined)
            {
                obj[n] = 1;
            }else{
                obj[n]++;
            }
        }
    
        const sorted = Object.entries(obj).sort((a, b) => b[1]-a[1]);

        return sorted.slice(0,k).map(item => Number(item[0]));

    }
}
