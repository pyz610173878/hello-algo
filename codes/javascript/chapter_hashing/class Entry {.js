// // class Entry {
// //     constructor(key, val) {
// //         this.key = key;
// //         this.val = val;
// //     }
// // }

// // // 哈希表中就存在这两个值，key与value。



// // // 使用数组实现的哈希表。
// // // 这个类可以不断地优化。
// // // 你也可以去查看js中map的源码。有时间的话。

// // class ArrayHashMap {
// //     #buckets;
// //     //  #buckets 是 ArrayHashMap 类中用于存储数据的私有数组。
// //     // 这意味着 #buckets 变量只能在 ArrayHashMap 类的内部访问，
// //     // 而无法从类的外部直接访问或修改它。

// //     constructor() {

// //         this.#buckets = new Array(100).fill(null);

// //     }

// //     #hashFunc(key) {
// //         return key % 100
// //     }

// //     get(key) {
// //         // 1. 使用hashfunc函数，返回对应的索引值。
// //         // 使用索引值查找桶对应的位置

// //         let index = this.#hashFunc(key)
// //         let entry = this.#buckets[index]
// //         if (entry === null) return null;
// //         return entry.val;
// //     }

// //     set(key, val) {
// //         // 在哈希表中添加键值对 (key, value)
// //         let index = this.#hashFunc(key);
// //         this.#buckets[index] = new Entry(key, val);
// //     }

// //     delete(key) {
// //         // 删除就是把对应的索引值删除

// //         let index = this.#hashFunc(key)
// //         this.#buckets[index] = null;


// //         // 我现在能够找到对应的桶，删除桶的意思就是，
// //         // 删除对应索引值与索引值中的key 与value。

// //     }
// //     entries() {
// //         let arr = [];
// //         for (let i = 0; i < this.#buckets.length; i++) {
// //             if (this.#buckets[i]) {
// //                 arr.push(this.#buckets[i]);
// //             }
// //         }
// //         return arr;
// //     }

// //     /* 获取所有键 */
// //     keys() {
// //         let arr = [];
// //         for (let i = 0; i < this.#buckets.length; i++) {
// //             if (this.#buckets[i]) {
// //                 arr.push(this.#buckets[i]?.key);
// //             }
// //         }
// //         return arr;
// //     }

// //     /* 获取所有值 */
// //     values() {
// //         let arr = [];
// //         for (let i = 0; i < this.#buckets.length; i++) {
// //             if (this.#buckets[i]) {
// //                 arr.push(this.#buckets[i]?.val);
// //             }
// //         }
// //         return arr;
// //     }
// // }

// // const map = new ArrayHashMap();
// // console.log(map);





// // 一个哈希表中，只有两个关键性属性。key 与 val.所以只需要初始化他们。


// class Entry {

//     constructor(key, val) {
//         this.key = key
//         this.val = val
//     }
// }

// class ArrayHashMap {


//     #buckets
//     constructor() {
//         this.#buckets = new Array(100).fill(null);
//     }

//     #hashFunction(key) {
//         return key % 100
//     }
//     get(key) {
//         let index = this.#hashFunction(key)
//         let entry = this.#buckets[index]

//         if (entry == null) {
//             return null
//         }
//         return entry.val
//         // entry 是一个桶，桶包括 key和value。
//         // 此函数是根据key返回value。
//     }

//     set(key, val) {
//         let index = this.#hashFunction(key)
//         this.#buckets[index] = new Array(key, val)
//     }

//     delete(key) {
//         let index = this.#hashFunction(key)
//         this.#buckets[index] = null;
//     }

//     entries() {
//         let arr = [];
//         for (let i = 0; i < this.#buckets.length; i++) {
//             if (this.#buckets[i]) {
//                 arr.push(this.#buckets[i])
//             }
//         }
//         return arr
//     }

//     keys() {
//         let arr = [];
//         for (let i = 0; i < this.#buckets.length; i++) {
//             if (this.#buckets[i]) {
//                 arr.push(this.#buckets[i].key)
//             }
//         }
//         return arr
//     }

//     print() {
//         let entrySet = this.entries();
//         for (const entry of entrySet) {
//             if (!entry) continue;
//             console.info(`${entry.key} -> ${entry.val}`);
//         }
//     }
// }


function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
            // 这个属于赋值
            // {
                // h: 1
                // 类似于 charCount.set(key,value)
            }
        }
    }
    return charCount;
}
const myString = "hello, world";
const charOccurrences = countCharacterOccurrences(myString);
console.log(charOccurrences);


charCount[h]