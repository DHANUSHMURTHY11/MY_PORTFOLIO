declare module "gsap/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | string[] | HTMLElement | HTMLElement[], vars?: Record<string, any>);
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module "gsap/ScrollSmoother" {
  import { Plugin } from "gsap";
  export class ScrollSmoother extends Plugin {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static refresh(hard?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
