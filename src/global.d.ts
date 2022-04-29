export {};

declare global {
  interface String {
    includesCI(val: string): boolean;
  }
}