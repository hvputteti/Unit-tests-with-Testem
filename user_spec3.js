describe("tests for 'toBeDefined'", function() {
    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
            foo: "foo",
            bar: "bar",
            car: "cars"
        };
        var def = TBD(a);
        // var undef=TBD(a);
        console.log(def);
        // console.log(typeof(def));
        // console.log(undef);
        expect(TBD(a)).toBeDefined();
        expect(TBD(a).bar).toBeDefined();
        expect(TBD(a).car).not.toBeDefined();
    });
});
