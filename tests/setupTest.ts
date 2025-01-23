import "@testing-library/jest-dom";

class IntersectionObserver {
    constructor(callback: any, options: any) {}

    observe() {
        return null;
    }

    unobserve() {
        return null;
    }

    disconnect() {
        return null;
    }
}

Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
});
