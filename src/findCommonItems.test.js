it("Finds similar items in 2 arrays and if there are similar items returns true", () => {
    const findCommonItems = jest.fn((array1, array2) => { 
        for(let i = 0; i < array1.length; i++) { 
            for(let j = 0; j < array2.length; j++) { 
                if(array1[i] === array2[j]) { 
                    return true; 
                } 
            } 
        } 
        return false;  
    })

    expect(findCommonItems([1,2,3], [1,2,5])).toBe(true)
})

