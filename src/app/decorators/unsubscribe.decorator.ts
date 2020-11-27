const isFunction = fn => typeof fn === 'function';
// tslint:disable-next-line:no-unused-expression
const doUnsubscribe = subscription => { subscription && isFunction(subscription.unsubscribe) && subscription.unsubscribe(); };
// tslint:disable-next-line:no-unused-expression
const doUnsubscribeIfArray = subscriptionsArray => { Array.isArray(subscriptionsArray) && subscriptionsArray.forEach(doUnsubscribe); };
// tslint:disable-next-line:typedef
export function AutoUnsubscribe({
  blackList = [],
  arrayName = '',
  event = 'ngOnDestroy'
} = {}) {
  // tslint:disable-next-line:ban-types
  return (constructor: Function) => {
    const original = constructor.prototype[event];
    if (!isFunction(original)) {
      throw new Error(
        `${constructor.name
        } is using @AutoUnsubscribe but does not implement ${event}`
      );
    }
    constructor.prototype[event] = function () {
      // tslint:disable-next-line:no-unused-expression
      isFunction(original) && original.apply(this, arguments);
      if (arrayName) {
        doUnsubscribeIfArray(this[arrayName]);
        return;
      }
      for (const propName in this) {
        if (blackList.includes(propName)) { continue; }
        const property = this[propName];
        doUnsubscribe(property);
      }
    };
  };
}
