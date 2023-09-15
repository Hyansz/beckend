const { createData, findById, updateData, deleteData } = require("./CrudObject")

describe('test CrudString', () => {
    test('when create should success', () => {
        let bank = []
        let result = createData(bank, {id: 1, name: "samsul"})

        expect(result).toEqual([{id: 1, name: "samsul"}])
    })

    test('when create should success', () => {
        let bank = [{id: 1, name: "samsul"}]
        let result = createData(bank, {id: 2, name: "bambang"})

        expect(result).toEqual([
            {id: 1, name: "samsul"},
            {id: 2, name: "bambang"}
        ])
    })

    test('when readByIndex should success', () => {
        let bank = [
            {id: 1, name: "samsul"},
            {id: 2, name: "bambang"}
        ]
        let result = findById(bank, 2)

        expect(result).toEqual({id: 2, name: "bambang"})
    })

    test("when update name should success", () => {
        let bank = [
            { id: 1, name: "samsul", age:16 },
            { id: 2, name: "bambang", age:16 },
        ];

        // mengubah ID 1 dengan nama Arifin
        // menggunakan objectArray.findByIdx((value)=>value.id === id)
        let result = updateData(bank, 1, "arifin", 17);
        expect(result).toEqual([
            { id: 1, name: "arifin", age:17 },
            { id: 2, name: "bambang", age:16 },
        ]);
    });

    test('when deleteData should success', () => {
        let bank = [
            {id: 1, name: "samsul"},
            {id: 2, name: "bambang"}
        ]
        let result = deleteData(bank, 1)

        expect(result).toEqual([{id: 2, name: "bambang"}])
    })
})