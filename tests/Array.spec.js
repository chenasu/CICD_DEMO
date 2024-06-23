import { expect } from 'chai'

describe('Array', ()=>{
    describe("#sort", ()=>{
        it("should sort arrays", ()=>{
            var names = ['Dani', 'Moshe', 'Adam'];
            expect(names.sort()).to.be.eql(['Adam', 'Dani', 'Moshe']);
        });
    })
})