const Lesson8 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 27-30: Hash Tables</h2>
      <p className="mb-4">
        Hash tables are an efficient way to store key-value pairs and perform
        quick lookups.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a hash table?</li>
        <li>Hash functions and their properties</li>
        <li>Collision resolution techniques: Chaining and open addressing</li>
        <li>Hash table operations: Insertion, Deletion, Searching</li>
        <li>Applications of hash tables</li>
      </ul>
      <p className="mb-4">
        Understanding hash tables will enable you to implement efficient data
        retrieval and storage mechanisms.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Hash Tables
          </h2>
          <p>
            A hash table is a data structure that provides efficient storage and
            retrieval of data using a technique called hashing. Hash tables use
            a hash function to compute an index into an array of buckets or
            slots, from which the desired value can be found.
          </p>
          <p>
            Hash tables are commonly used to implement associative arrays,
            database indexing, and sets. They offer average time complexity of
            O(1) for insertion, deletion, and search operations.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Hash Functions</h2>
          <p>
            A hash function maps input data to a fixed-size value, which is used
            as the index in the hash table. A good hash function minimizes
            collisions and distributes the data evenly across the table.
          </p>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`// Simple Hash Function Example
function hashFunction(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

// Example usage
const key = 'exampleKey';
const tableSize = 10;
const hashIndex = hashFunction(key, tableSize);
console.log('Hash Index:', hashIndex);
`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Handling Collisions
          </h2>
          <p>
            Collisions occur when two keys hash to the same index. Common
            methods to handle collisions include:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Chaining:</b> Store collided elements in a linked list or
              another dynamic data structure at the same index.
            </li>
            <li>
              <b>Open Addressing:</b> Find another slot within the table using
              probing techniques such as linear probing, quadratic probing, or
              double hashing.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`// Example of Chaining using Linked Lists
class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null);
  }

  hash(key) {
    return hashFunction(key, this.table.length);
  }

  insert(key, value) {
    const index = this.hash(key);
    let node = this.table[index];
    if (node === null) {
      this.table[index] = new Node(key, value);
    } else {
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(key, value);
    }
  }

  search(key) {
    const index = this.hash(key);
    let node = this.table[index];
    while (node !== null) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }
}

// Example usage
const hashTable = new HashTable(10);
hashTable.insert('key1', 'value1');
console.log(hashTable.search('key1')); // Output: 'value1'
`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Operations on Hash Tables
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Insertion:</b> Add a key-value pair to the hash table.
            </li>
            <li>
              <b>Deletion:</b> Remove a key-value pair from the hash table.
            </li>
            <li>
              <b>Search:</b> Retrieve the value associated with a key.
            </li>
          </ul>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Examples and Exercises
          </h2>
          <p>
            Try the following exercises to practice working with hash tables:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Implement a hash table with chaining and open addressing
              techniques for collision handling.
            </li>
            <li>
              Write a hash function that distributes keys uniformly across the
              table.
            </li>
            <li>
              Develop a hash table that supports dynamic resizing when the load
              factor exceeds a certain threshold.
            </li>
            <li>
              Use hash tables to solve problems such as finding duplicates in an
              array or counting frequencies of elements.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson8;
