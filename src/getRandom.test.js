it("Returns an array randomly sorted with a specified output", () => {
    const getRandom = jest.fn((arr, num) => {
        let result = new Array(num),
            len = arr.length,
            taken = new Array(len);
        if (num > len)
            throw new RangeError("Error: Too many elements");
        while (num--) {
            let x = Math.floor(Math.random() * len);
            result[num] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    })

    expect(getRandom([1,2,3], 2)).not.toHaveLength(3)
})