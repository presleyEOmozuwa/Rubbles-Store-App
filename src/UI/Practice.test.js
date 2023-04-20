import { expect, jest, test } from '@jest/globals';
import { User } from './helper';

const sum = (x, y) => {
    return x + y;
}

const doSomething = (data, callback) => {
    return callback(data);
}

test("sum function", () => {
    const mockFn = jest.fn((x, y) => x + y);
    expect(mockFn(7,3)).toBe(10);
});

test("spy", () => {
    const user = new User("Smith", "Blake");
    const spyFn = jest.spyOn(User.prototype, 'getInfo')
    .mockImplementationOnce(() => "Smith Blake");
    user.getInfo();
    expect(spyFn).toHaveReturnedWith("Smith Blake");
});

test("practice", () => {
    const mockCallBack = jest.fn();
    doSomething("Hello", mockCallBack);
    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(mockCallBack).toHaveBeenCalledWith("Hello");
});





