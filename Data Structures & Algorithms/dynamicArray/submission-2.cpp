class DynamicArray {
private:
    int capacity;
    int length;
    int *array;

public:
    DynamicArray(int capacity) : capacity(capacity), length(0) {
        array = new int[capacity];
    }

    ~DynamicArray() {
        delete[] array;
    }

    int get(int i) {
        if (i >= 0 && i < length)
            return array[i];
        else
            throw std::out_of_range("Index out of bounds");
    }

    void set(int i, int n) {
        if (i >= 0 && i < length)
            array[i] = n;
        else
            throw std::out_of_range("Index out of bounds");
    }

    void pushback(int n) {
        if (length == capacity)
            resize();
        array[length++] = n;
    }

    int popback() {
        if (length > 0)
            return array[--length];
        else
            throw std::underflow_error("Array is empty");
    }

    void resize() {
        int newCapacity = capacity * 2; // Doubling the capacity
        int *newArray = new int[newCapacity];
        for (int i = 0; i < length; i++) {
            newArray[i] = array[i];
        }
        delete[] array;
        array = newArray;
        capacity = newCapacity;
    }

    int getSize() {
        return length;
    }

    int getCapacity() {
        return capacity;
    }
};
