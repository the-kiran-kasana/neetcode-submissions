class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {}

        for(let s of strs){

            let sortStr = s.split('').sort().join('');

            if(!res[sortStr])
            {
                res[sortStr] = []
            }

            res[sortStr].push(s);
        }

        return Object.values(res);
    }
}
