import countReducer from '../../src/reducers/countReducer'
import { testAction1, testAction2, testAction3, testAction4, testAction5, testAction6, testState1, testState2 } 
from '../__mocks__/mocks';


describe("countReducer",() =>{
    
    it("increases count by 1 ", () =>{
        const result = countReducer(testState1,testAction1);
        expect(result.count).toBe(1);
    });
    it("decreases count by 1 ", () =>{
        const result = countReducer(testState1,testAction2);
        expect(result.count).toBe(-1);
    });
    it("increases delta by 10 ", () =>{
        const result = countReducer(testState1,testAction3);
        expect(result.delta).toBe(10);
    });
    it("decreases delta by 10 ", () =>{
        const result = countReducer(testState1,testAction4);
        expect(result.delta).toBe(-10);
    });
    it("resets delta to 0 ", () =>{
        const result = countReducer(testState2,testAction5);
        expect(result.delta).toBe(0);
    });
    it("Resets count to 0 ", () =>{
        const result = countReducer(testState2,testAction6);
        expect(result.count).toBe(0);
    });;
    // it("Returns default state ", () =>{
    //     const result = countReducer(testState1,{type:'DEFAULT'});
    //     expect(result.count).toBe(0);
    // });

});