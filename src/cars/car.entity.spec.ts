import { Car.Entity } from './car.entity';

describe('Car.Entity', () => {
  it('should be defined', () => {
    expect(new Car.Entity()).toBeDefined();
  });
});
