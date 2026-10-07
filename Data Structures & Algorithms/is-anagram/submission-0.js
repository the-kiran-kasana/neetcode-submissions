class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

       if(s.length != t.length) return false;
       if(s.split('').sort().join('') == t.split('').sort().join('')) return  true

       return false;

        // for(let i = 0;i<s.length;i++){
        //     if(s[i] != t[i]){
        //         return false;
        //     }
        // }

        // return true;
    }
}
