const MyStringStore = artifacts.require("./MyStringStore.sol");

contract("MyStringStore", accounts => {
    it('should store the string \'Hi Mom\'', async() => {
        const myStringStore = await MyStringStore.deployed();

        await myStringStore.set("Hi Mom", { from: accounts[0] });

        const storedString = await myStringStore.myString.call();

        assert.equal(storedString, "Hi Mom");
    });
})