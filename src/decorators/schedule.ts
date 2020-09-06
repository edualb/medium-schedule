export function Schedule(interval: number) {

  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {

    const originalValue = descriptor.value;

    descriptor.value = function (...args: any[]) {
      
      return setInterval(() => {

        originalValue.apply(this, args);

      }, interval);
    }
  }
}