import { Summator } from "./Summator";

describe("Summator", () => {
    it("test summator() function", () =>{
      expect(new Summator().summator(1,2,3,4))
      .toBe(10);  
    })
});

describe("Summator", () => {
    it("test summator() function", () =>{
      expect(new Summator().summator("1","2","3","4"))
      .toBe("1234");  
    })
});

describe("Summator", () => {
    it("test summator() function", () =>{
      expect(new Summator().summator())
      .toBe(0);  
    })
});