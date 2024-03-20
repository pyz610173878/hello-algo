# 4.2 链表

内存空间是所有程序的公共资源，排除已被占用的内存空间，空闲内存空间通常散落在内存各处。在上一节中，我们提到存储数组的内存空间必须是连续的，而当我们需要申请一个非常大的数组时，空闲内存中可能没有这么大的连续空间。

## 链表的特性

### 非连续性

与数组相比，链表更具灵活性，它可以被存储在**非连续的**内存空间中。

### 节点与指针

「链表 Linked List」是一种线性数据结构，其每个元素都是一个节点对象，各个节点之间通过指针连接，从当前节点通过指针可以访问到下一个节点。**由于指针记录了下个节点的内存地址，因此无需保证内存地址的连续性**，从而可以将各个节点分散存储在内存各处。

链表「节点 Node」包含两项数据，一是节点「值 Value」，二是指向下一节点的「指针 Pointer」，或称「引用 Reference」。

![链表定义与存储方式](linked_list.assets/linkedlist_definition.png)

=== "Python"

    ```python title=""
    class ListNode:
        """链表节点类"""
        def __init__(self, val: int):
            self.val: int = val                  # 节点值
            self.next: Optional[ListNode] = None # 指向下一节点的指针（引用）
    ```

=== "Go"

    ```go title=""
    /* 链表节点结构体 */
    type ListNode struct {
        Val  int       // 节点值
        Next *ListNode // 指向下一节点的指针（引用）
    }
    
    // NewListNode 构造函数，创建一个新的链表
    func NewListNode(val int) *ListNode {
        return &ListNode{
            Val:  val,
            Next: nil,
        }
    }
    ```

=== "JavaScript"

    ```javascript title=""
    /* 链表节点类 */
    class ListNode {
        val;
        next;
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val);       // 节点值
            this.next = (next === undefined ? null : next); // 指向下一节点的引用
        }
    }
    ```

=== "TypeScript"

    ```typescript title=""
    /* 链表节点类 */
    class ListNode {
        val: number;
        next: ListNode | null;
        constructor(val?: number, next?: ListNode | null) {
            this.val = val === undefined ? 0 : val;        // 节点值
            this.next = next === undefined ? null : next;  // 指向下一节点的引用
        }
    }
    ```

=== "C"

    ```c title=""
    /* 链表节点结构体 */
    struct ListNode {
        int val;               // 节点值
        struct ListNode *next; // 指向下一节点的指针（引用）
    };
    
    typedef struct ListNode ListNode;
    
    /* 构造函数 */
    ListNode *newListNode(int val) {
        ListNode *node, *next;
        node = (ListNode *) malloc(sizeof(ListNode));
        node->val = val;
        node->next = NULL;
        return node;
    }
    ```

=== "C#"

    ```csharp title=""
    /* 链表节点类 */
    class ListNode
    {
        int val;         // 节点值
        ListNode next;   // 指向下一节点的引用
        ListNode(int x) => val = x;  //构造函数
    }
    ```

=== "Swift"

    ```swift title=""
    /* 链表节点类 */
    class ListNode {
        var val: Int // 节点值
        var next: ListNode? // 指向下一节点的指针（引用）
    
        init(x: Int) { // 构造函数
            val = x
        }
    }
    ```

=== "Zig"

    ```zig title=""
    // 链表节点类
    pub fn ListNode(comptime T: type) type {
        return struct {
            const Self = @This();
            
            val: T = 0, // 节点值
            next: ?*Self = null, // 指向下一节点的指针（引用）
    
            // 构造函数
            pub fn init(self: *Self, x: i32) void {
                self.val = x;
                self.next = null;
            }
        };
    }
    ```

!!! question "尾节点指向什么？"

    我们将链表的最后一个节点称为「尾节点」，其指向的是“空”，在 Java, C++, Python 中分别记为 $\text{null}$ , $\text{nullptr}$ , $\text{None}$ 。在不引起歧义的前提下，本书都使用 $\text{null}$ 来表示空。

!!! question "如何称呼链表？"

    在编程语言中，数组整体就是一个变量，例如数组 `nums` ，包含各个元素 `nums[0]` , `nums[1]` 等等。而链表是由多个节点对象组成，我们通常将头节点当作链表的代称，例如头节点 `head` 和链表 `head` 实际上是同义的。

## 基本操作

### 初始化

**链表初始化方法**。建立链表分为两步，第一步是初始化各个节点对象，第二步是构建引用指向关系。完成后，即可以从链表的头节点（即首个节点）出发，通过指针 `next` 依次访问所有节点。

=== "Python"

    ```python title="linked_list.py"
    # 初始化链表 1 -> 3 -> 2 -> 5 -> 4
    # 初始化各个节点 
    n0 = ListNode(1)
    n1 = ListNode(3)
    n2 = ListNode(2)
    n3 = ListNode(5)
    n4 = ListNode(4)
    # 构建引用指向
    n0.next = n1
    n1.next = n2
    n2.next = n3
    n3.next = n4
    ```

=== "JavaScript"

    ```javascript title="linked_list.js"
    /* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
    // 初始化各个节点
    const n0 = new ListNode(1);
    const n1 = new ListNode(3);
    const n2 = new ListNode(2);
    const n3 = new ListNode(5);
    const n4 = new ListNode(4);
    // 构建引用指向
    n0.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    ```

=== "TypeScript"

    ```typescript title="linked_list.ts"
    /* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
    // 初始化各个节点
    const n0 = new ListNode(1);
    const n1 = new ListNode(3);
    const n2 = new ListNode(2);
    const n3 = new ListNode(5);
    const n4 = new ListNode(4);
    // 构建引用指向
    n0.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    ```

=== "C"

    ```c title="linked_list.c"
    /* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
    // 初始化各个节点 
    ListNode* n0 = newListNode(1);
    ListNode* n1 = newListNode(3);
    ListNode* n2 = newListNode(2);
    ListNode* n3 = newListNode(5);
    ListNode* n4 = newListNode(4);
    // 构建引用指向
    n0->next = n1;
    n1->next = n2;
    n2->next = n3;
    n3->next = n4;
    ```
    p结点中的next指针存储了q结点的内存地址。
    
    我们把节点对象n1赋值给了n0->next节点中。也就是说n0->next指针存储了q节点的内存地址。我们可以把内存地址类比为各种实体地址，外卖快递柜，快递柜。上面的语句就相当于，快递员把你的快递（节点对象）放在（存储）了某个快递柜中（n0->next指针)，

### 插入

**链表中插入与删除节点的操作效率高**。例如，如果我们想在链表中间的两个节点 `A` , `B` 之间插入一个新节点 `P` ，我们只需要改变两个节点指针即可，时间复杂度为 $O(1)$ ；相比之下，数组的插入操作效率要低得多。

![链表插入节点](linked_list.assets/linkedlist_insert_node.png)

=== "Java"

    ```java title="linked_list.java"
    [class]{linked_list}-[func]{insert}
    ```

=== "C++"

    ```cpp title="linked_list.cpp"
    [class]{}-[func]{insert}
    ```

=== "Python"

    ```python title="linked_list.py"
    [class]{}-[func]{insert}
    ```

=== "Go"

    ```go title="linked_list.go"
    [class]{}-[func]{insertNode}
    ```

=== "JavaScript"

    ```javascript title="linked_list.js"
    [class]{}-[func]{insert}
    ```

=== "TypeScript"

    ```typescript title="linked_list.ts"
    [class]{}-[func]{insert}
    ```

=== "C"

    ```c title="linked_list.c"
    [class]{}-[func]{insert}
    ```

=== "C#"

    ```csharp title="linked_list.cs"
    [class]{linked_list}-[func]{insert}
    ```

=== "Swift"

    ```swift title="linked_list.swift"
    [class]{}-[func]{insert}
    ```

=== "Zig"

    ```zig title="linked_list.zig"
    [class]{}-[func]{insert}
    ```

在链表中删除节点也非常方便，只需改变一个节点的指针即可。如下图所示，尽管在删除操作完成后，节点 `P` 仍然指向 `n1` ，但实际上 `P` 已经不再属于此链表，因为遍历此链表时无法访问到 `P` 。

![链表删除节点](linked_list.assets/linkedlist_remove_node.png)

=== "Java"

    ```java title="linked_list.java"
    [class]{linked_list}-[func]{remove}
    ```

=== "C++"

    ```cpp title="linked_list.cpp"
    [class]{}-[func]{remove}
    ```

=== "Python"

    ```python title="linked_list.py"
    [class]{}-[func]{remove}
    ```

=== "Go"

    ```go title="linked_list.go"
    [class]{}-[func]{removeNode}
    ```

=== "JavaScript"

    ```javascript title="linked_list.js"
    [class]{}-[func]{remove}
    ```

=== "TypeScript"

    ```typescript title="linked_list.ts"
    [class]{}-[func]{remove}
    ```

=== "C"

    ```c title="linked_list.c"
    [class]{}-[func]{removeNode}
    ```

=== "C#"

    ```csharp title="linked_list.cs"
    [class]{linked_list}-[func]{remove}
    ```

=== "Swift"

    ```swift title="linked_list.swift"
    [class]{}-[func]{remove}
    ```

=== "Zig"

    ```zig title="linked_list.zig"
    [class]{}-[func]{remove}
    ```

## 链表缺点

**链表访问节点效率较低**。如上节所述，数组可以在 $O(1)$ 时间下访问任意元素。然而，链表无法直接访问任意节点，这是因为系统需要从头节点出发，逐个向后遍历直至找到目标节点。例如，若要访问链表索引为 `index`（即第 `index + 1` 个）的节点，则需要向后遍历 `index` 轮。

=== "Java"

    ```java title="linked_list.java"
    [class]{linked_list}-[func]{access}
    ```

=== "C++"

    ```cpp title="linked_list.cpp"
    [class]{}-[func]{access}
    ```

=== "Python"

    ```python title="linked_list.py"
    [class]{}-[func]{access}
    ```

=== "Go"

    ```go title="linked_list.go"
    [class]{}-[func]{access}
    ```

=== "JavaScript"

    ```javascript title="linked_list.js"
    [class]{}-[func]{access}
    ```

=== "TypeScript"

    ```typescript title="linked_list.ts"
    [class]{}-[func]{access}
    ```

=== "C"

    ```c title="linked_list.c"
    [class]{}-[func]{access}
    ```

=== "C#"

    ```csharp title="linked_list.cs"
    [class]{linked_list}-[func]{access}
    ```

=== "Swift"

    ```swift title="linked_list.swift"
    [class]{}-[func]{access}
    ```

=== "Zig"

    ```zig title="linked_list.zig"
    [class]{}-[func]{access}
    ```

**链表的内存占用较大**。链表以节点为单位，每个节点除了保存值之外，还需额外保存指针（引用）。这意味着在相同数据量的情况下，链表比数组需要占用更多的内存空间。

## 链表常用操作

**遍历链表查找**。遍历链表，查找链表内值为 `target` 的节点，输出节点在链表中的索引。

=== "Java"

    ```java title="linked_list.java"
    [class]{linked_list}-[func]{find}
    ```

=== "C++"

    ```cpp title="linked_list.cpp"
    [class]{}-[func]{find}
    ```

=== "Python"

    ```python title="linked_list.py"
    [class]{}-[func]{find}
    ```

=== "Go"

    ```go title="linked_list.go"
    [class]{}-[func]{findNode}
    ```

=== "JavaScript"

    ```javascript title="linked_list.js"
    [class]{}-[func]{find}
    ```

=== "TypeScript"

    ```typescript title="linked_list.ts"
    [class]{}-[func]{find}
    ```

=== "C"

    ```c title="linked_list.c"
    [class]{}-[func]{find}
    ```

=== "C#"

    ```csharp title="linked_list.cs"
    [class]{linked_list}-[func]{find}
    ```

=== "Swift"

    ```swift title="linked_list.swift"
    [class]{}-[func]{find}
    ```

=== "Zig"

    ```zig title="linked_list.zig"
    [class]{}-[func]{find}
    ```

## 常见链表类型

**单向链表**。即上述介绍的普通链表。单向链表的节点包含值和指向下一节点的指针（引用）两项数据。我们将首个节点称为头节点，将最后一个节点成为尾节点，尾节点指向 $\text{null}$ 。

**环形链表**。如果我们令单向链表的尾节点指向头节点（即首尾相接），则得到一个环形链表。在环形链表中，任意节点都可以视作头节点。

**双向链表**。与单向链表相比，双向链表记录了两个方向的指针（引用）。双向链表的节点定义同时包含指向后继节点（下一节点）和前驱节点（上一节点）的指针。相较于单向链表，双向链表更具灵活性，可以朝两个方向遍历链表，但相应地也需要占用更多的内存空间。

=== "Java"

    ```java title=""
    /* 双向链表节点类 */
    class ListNode {
        int val;        // 节点值
        ListNode next;  // 指向后继节点的指针（引用）
        ListNode prev;  // 指向前驱节点的指针（引用）
        ListNode(int x) { val = x; }  // 构造函数
    }
    ```

=== "C++"

    ```cpp title=""
    /* 双向链表节点结构体 */
    struct ListNode {
        int val;         // 节点值
        ListNode *next;  // 指向后继节点的指针（引用）
        ListNode *prev;  // 指向前驱节点的指针（引用）
        ListNode(int x) : val(x), next(nullptr), prev(nullptr) {}  // 构造函数
    };
    ```

=== "Python"

    ```python title=""
    class ListNode:
        """双向链表节点类"""
        def __init__(self, val: int):
            self.val: int = val                   # 节点值
            self.next: Optional[ListNode] = None  # 指向后继节点的指针（引用）
            self.prev: Optional[ListNode] = None  # 指向前驱节点的指针（引用）
    ```

=== "Go"

    ```go title=""
    /* 双向链表节点结构体 */
    type DoublyListNode struct {
        Val  int             // 节点值
        Next *DoublyListNode // 指向后继节点的指针（引用）
        Prev *DoublyListNode // 指向前驱节点的指针（引用）
    }
    
    // NewDoublyListNode 初始化
    func NewDoublyListNode(val int) *DoublyListNode {
        return &DoublyListNode{
            Val:  val,
            Next: nil,
            Prev: nil,
        }
    }
    ```

=== "JavaScript"

    ```javascript title=""
    /* 双向链表节点类 */
    class ListNode {
        val;
        next;
        prev;
        constructor(val, next) {
            this.val = val  ===  undefined ? 0 : val;        // 节点值
            this.next = next  ===  undefined ? null : next;  // 指向后继节点的指针（引用）
            this.prev = prev  ===  undefined ? null : prev;  // 指向前驱节点的指针（引用）
        }
    }
    ```

=== "TypeScript"

    ```typescript title=""
    /* 双向链表节点类 */
    class ListNode {
        val: number;
        next: ListNode | null;
        prev: ListNode | null;
        constructor(val?: number, next?: ListNode | null, prev?: ListNode | null) {
            this.val = val  ===  undefined ? 0 : val;        // 节点值
            this.next = next  ===  undefined ? null : next;  // 指向后继节点的指针（引用）
            this.prev = prev  ===  undefined ? null : prev;  // 指向前驱节点的指针（引用）
        }
    }
    ```

=== "C"

    ```c title=""
    /* 双向链表节点结构体 */
    struct ListNode {
        int val;               // 节点值
        struct ListNode *next; // 指向后继节点的指针（引用）
        struct ListNode *prev; // 指向前驱节点的指针（引用）
    };
    
    typedef struct ListNode ListNode;
    
    /* 构造函数 */
    ListNode *newListNode(int val) {
        ListNode *node, *next;
        node = (ListNode *) malloc(sizeof(ListNode));
        node->val = val;
        node->next = NULL;
        node->prev = NULL;
        return node;
    }
    ```

=== "C#"

    ```csharp title=""
    /* 双向链表节点类 */
    class ListNode {
        int val;        // 节点值
        ListNode next;  // 指向后继节点的指针（引用）
        ListNode prev;  // 指向前驱节点的指针（引用）
        ListNode(int x) => val = x;  // 构造函数
    }
    ```

=== "Swift"

    ```swift title=""
    /* 双向链表节点类 */
    class ListNode {
        var val: Int // 节点值
        var next: ListNode? // 指向后继节点的指针（引用）
        var prev: ListNode? // 指向前驱节点的指针（引用）
    
        init(x: Int) { // 构造函数
            val = x
        }
    }
    ```

=== "Zig"

    ```zig title=""
    // 双向链表节点类
    pub fn ListNode(comptime T: type) type {
        return struct {
            const Self = @This();
            
            val: T = 0, // 节点值
            next: ?*Self = null, // 指向后继节点的指针（引用）
            prev: ?*Self = null, // 指向前驱节点的指针（引用）
    
            // 构造函数
            pub fn init(self: *Self, x: i32) void {
                self.val = x;
                self.next = null;
                self.prev = null;
            }
        };
    }
    ```

![常见链表种类](linked_list.assets/linkedlist_common_types.png)



## 4.2.4  链表典型应用



### 单向链表

单向链表通常用于实现栈、队列、哈希表和图等数据结构。

```
没有例子，我无法理解。链表
```



* **栈与队列**：当插入和删除操作都在链表的**一端**进行时，它表现出先进**后出**的的特性，对应栈；

    * 当插入操作在链表的一端进行，删除操作在链表的**另一端**进行，它表现出先进**先出**的特性，对应队列。

    ```
    这些知识算是一个总结，但是目前没有例子，你是理解不了的。但是整个的知识体系，就是单向，双向，喝循环列表。
    ```

    

* **哈希表**：链地址法是解决哈希冲突的主流方案之一，在该方案中，所有冲突的元素都会被放到一个链表中。

* **图**：邻接表是表示图的一种常用方式，在其中，图的每个顶点都与一个链表相关联，链表中的每个元素都代表与该顶点相连的其他顶点。



### 双向链表

双向链表常被用于需要快速查找前一个和下一个元素的场景。

* **高级数据结构**：比如在红黑树、B 树中，我们需要访问节点的父节点，这可以通过在节点中保存一个指向父节点的引用来实现，类似于双向链表。
* **浏览器历史**：在网页浏览器中，当用户点击前进或后退按钮时，浏览器需要知道用户访问过的前一个和后一个网页。双向链表的特性使得这种操作变得简单。
* **LRU 算法**：在缓存淘汰算法（LRU）中，我们需要快速找到最近最少使用的数据，以及支持快速地添加和删除节点。这时候使用双向链表就非常合适。



### 循环链表

循环链表常被用于需要周期性操作的场景，比如操作系统的资源调度。

* **时间片轮转调度算法**：在操作系统中，时间片轮转调度算法是一种常见的 CPU 调度算法，它需要对一组进程进行循环。每个进程被赋予一个时间片，当时间片用完时，CPU 将切换到下一个进程。这种循环的操作就可以通过循环链表来实现。
* **数据缓冲区**：在某些数据缓冲区的实现中，也可能会使用到循环链表。比如在音频、视频播放器中，数据流可能会被分成多个缓冲块并放入一个循环链表，以便实现无缝播放。







```
我的理解是头与尾。调换位置。


反转链表就是把索引值123的指针指向，换一个方向。












 
```







## 链表

### 指针

### 内存

### 创建一个基本的链表对象



## 链表中的双指针

### 哈希表



