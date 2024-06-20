import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('able to reverse a string', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform("hello")).toEqual('olleh');
  });
});
