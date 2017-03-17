// describe("The 'toEqual' matcher", function() {
//
//     it("should match password rules", function() {
//
//         // This regex will enforce these rules:
//         // At least one upper case english letter, (?=.*?[A-Z])
//         // At least one lower case english letter, (?=.*?[a-z])
//         // At least one digit, (?=.*?[0-9])
//         // At least one special character, (?=.*?[#?!@$%^&*-])
//         // Minimum 8 in length .{8,} (with the anchors)
//         var password1 = "Ab!4567890" //a12345678
//         var password2 = "bM!4567890"
//         var password3 = "!bM4567890"
//         var password4 = "4567890bM!"
//         var password5 = "456bM!7890"
//         var password6 = "bM!456@789"
//         var password7 = "" //blank string
//         var password8 = "Ab!4567" //less than 8 characters
//         var password9 = "Ab*#$%^&*0"
//         var password10 = "Ab!45678901" //more than 10 characters
//
//         expect(password1).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password2).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password3).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password4).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password5).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password6).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password7).not.toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password8).not.toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password9).toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//         expect(password10).not.toMatch("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$");
//     });
// });
