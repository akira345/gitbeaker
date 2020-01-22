import 'jest-extended';

declare global {
  namespace NodeJS {
    interface Global {
      TextEncoder: any;
    }
  }
}
