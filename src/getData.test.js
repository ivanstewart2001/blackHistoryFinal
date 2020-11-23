it("Sets and gets data from local storage", () => {
    let uniqueNames = []
    let names = ["Rosa Parks", "Adam Clayton Powell Jr.", "Colin Powell"]
    names.forEach((i) => {
    if (!uniqueNames.includes(i)) {
        uniqueNames.push(i)
    }
    })
        

    expect(uniqueNames).toStrictEqual(["Rosa Parks", "Adam Clayton Powell Jr.", "Colin Powell"])
})