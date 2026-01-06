const mathematicalSearch = {
    'interpolation-search': {
        title: 'Interpolation Search',
        tags: ["Linear datastructure", "Probabilistic", "Arithmetic based"],
        description: `<h2>Problem Description</h2><p>Search in uniformly distributed sorted data using the formula: <code>pos = low + [(target-arr[low])*(high-low)/(arr[high]-arr[low])]</code>.</p><h3>Example 1:</h3><pre><code>Input: arr = [10, 20, 30, 40], target = 30\nOutput: 2</code></pre>`,
        starterCode: `function interpolationSearch(arr, target) {}`
    },
    'ternary-search': {
        title: 'Ternary Search',
        tags: ["Divide and Conquer", "Unimodal Search", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Divide the range into three parts to find the maximum or minimum of a unimodal function.</p><h3>Example 1:</h3><pre><code>Input: f(x) = -x^2 + 4, Range [-5, 5]\nOutput: 0 (The maximum)</code></pre>`,
        starterCode: `function ternarySearch(f, low, high) {}`
    },
    'golden-section-search': {
        title: 'Golden Section Search',
        tags: ["Optimization", "Mathematical", "Unimodal Search"],
        description: `<h2>Problem Description</h2><p>Find the extremum of a function using the golden ratio 0.618.</p>`,
        starterCode: `function goldenSectionSearch(f, a, b) {}`
    },
    'unimodal-peak-search': {
        title: 'Search in Unimodal Array',
        tags: ["Linear datastructure", "Ternary Search logic", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Find the maximum element in an array that first increases and then decreases.</p><h3>Example 1:</h3><pre><code>Input: [1, 3, 8, 4, 2]\nOutput: 8</code></pre>`,
        starterCode: `function findUnimodalPeak(arr) {}`
    },
    'bisection-method-search': {
        title: 'Bisection Method (Root Finding)',
        tags: ["Numerical Analysis", "Mathematical", "Binary Search logic"],
        description: `<h2>Problem Description</h2><p>Search for the root of a continuous function where f(a) and f(b) have opposite signs.</p>`,
        starterCode: `function bisection(f, a, b, tol) {}`
    },
    'secant-method-search': {
        title: 'Secant Method Search',
        tags: ["Numerical Analysis", "Mathematical", "Iterative"],
        description: `<h2>Problem Description</h2><p>Estimate the root of a function using successive roots of secant lines.</p>`,
        starterCode: `function secantMethod(f, x0, x1, tol) {}`
    },
    'newton-raphson-search': {
        title: 'Newton-Raphson Search',
        tags: ["Numerical Analysis", "Calculus based", "Root finding"],
        description: `<h2>Problem Description</h2><p>Find the root of a function using its derivative: x1 = x0 - f(x0)/f'(x0).</p>`,
        starterCode: `function newtonRaphson(f, df, x0, tol) {}`
    },
    'fixed-point-iteration': {
        title: 'Fixed Point Iteration Search',
        tags: ["Numerical Analysis", "Mathematical", "Iterative"],
        description: `<h2>Problem Description</h2><p>Find a point where f(x) = x.</p>`,
        starterCode: `function fixedPoint(g, x0, tol) {}`
    },
    'regula-falsi-search': {
        title: 'False Position (Regula Falsi)',
        tags: ["Numerical Analysis", "Mathematical", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Find roots by combining the bisection method with secant method logic.</p>`,
        starterCode: `function regulaFalsi(f, a, b, tol) {}`
    },
    'gradient-descent-search': {
        title: 'Gradient Descent (1D)',
        tags: ["Optimization", "Calculus based", "Iterative"],
        description: `<h2>Problem Description</h2><p>Search for the local minimum of a function by moving in the direction of the negative gradient.</p>`,
        starterCode: `function gradientDescent(df, x0, lr) {}`
    }
};